import { NextResponse } from "next/server";
import { upsertMailchimpContact } from "@/lib/mailchimp";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  let email = "";
  let honeypot = "";
  let language = "";

  if (contentType.includes("application/json")) {
    const body = (await request.json()) as {
      email?: unknown;
      company?: unknown;
      language?: unknown;
    };
    email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    honeypot = typeof body.company === "string" ? body.company.trim() : "";
    language = typeof body.language === "string" ? body.language.trim() : "";
  } else {
    const formData = await request.formData();
    email = clean(formData.get("email")).toLowerCase();
    honeypot = clean(formData.get("company"));
    language = clean(formData.get("language"));
  }

  if (honeypot) {
    return NextResponse.json(
      { success: true, message: "Registration successful." },
      { status: 200 }
    );
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (language !== "FR" && language !== "EN") {
    return NextResponse.json(
      { success: false, message: "Invalid language." },
      { status: 400 }
    );
  }

  try {
    await upsertMailchimpContact({ email, language });

    return NextResponse.json({
      success: true,
      message: "Registration successful."
    });
  } catch (error) {
    const detail =
      error instanceof Error
        ? error.message
        : "Registration failed.";

    return NextResponse.json(
      {
        success: false,
        message: detail || "Registration failed."
      },
      { status: 500 }
    );
  }
}
