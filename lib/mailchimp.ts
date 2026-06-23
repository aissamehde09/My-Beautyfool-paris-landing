import crypto from "crypto";

type SubscribeInput = {
  email: string;
  language: "FR" | "EN";
};

type MailchimpError = {
  title?: string;
  detail?: string;
  status?: number;
};

const PRIVATE_CLUB_TAG = "private-club";

function getMailchimpConfig() {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!apiKey || !serverPrefix || !audienceId) {
    throw new Error("Configuration Mailchimp manquante.");
  }

  return { apiKey, serverPrefix, audienceId };
}

function subscriberHash(email: string) {
  return crypto.createHash("md5").update(email.trim().toLowerCase()).digest("hex");
}

async function parseMailchimpError(response: Response) {
  try {
    return (await response.json()) as MailchimpError;
  } catch {
    return {};
  }
}

export async function upsertMailchimpContact({ email, language }: SubscribeInput) {
  const { apiKey, serverPrefix, audienceId } = getMailchimpConfig();
  const normalizedEmail = email.trim().toLowerCase();
  const hash = subscriberHash(normalizedEmail);
  const baseUrl = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${hash}`;
  const authorization = `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`;

  const upsertResponse = await fetch(baseUrl, {
    method: "PUT",
    headers: {
      Authorization: authorization,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email_address: normalizedEmail,
      status: "subscribed",
      status_if_new: "subscribed"
    }),
    cache: "no-store"
  });

  if (!upsertResponse.ok) {
    const error = await parseMailchimpError(upsertResponse);
    throw new Error(
      error.detail || error.title || "Mailchimp rejected the subscription."
    );
  }

  const tagResponse = await fetch(`${baseUrl}/tags`, {
    method: "POST",
    headers: {
      Authorization: authorization,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      tags: [
        { name: PRIVATE_CLUB_TAG, status: "active" },
        { name: language, status: "active" },
        { name: language === "FR" ? "EN" : "FR", status: "inactive" }
      ]
    }),
    cache: "no-store"
  });

  if (!tagResponse.ok) {
    const error = await parseMailchimpError(tagResponse);
    throw new Error(error.detail || error.title || "The Mailchimp tags were not updated.");
  }
}
