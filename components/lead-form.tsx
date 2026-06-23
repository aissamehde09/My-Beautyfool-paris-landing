"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@/components/font-awesome-icon";

type ApiResponse = {
  success: boolean;
  message: string;
};

export function LeadForm() {
  const router = useRouter();
  const { i18n, t } = useTranslation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);
    const trimmedEmail = email.trim().toLowerCase();
    const company = String(formData.get("company") || "").trim();
    const language = i18n.language.toLowerCase().startsWith("fr") ? "FR" : "EN";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      setError(t("home.form.invalidEmail"));
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: trimmedEmail, company, language })
      });
      const payload = (await response.json()) as ApiResponse;

      if (!response.ok || !payload.success) {
        setError(payload.message || t("home.form.fallbackError"));
        return;
      }

      router.push("/merci");
    } catch {
      setError(t("home.form.networkError"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-[840px] rounded-[10px] bg-navy-900 px-5 py-8 text-white shadow-[0_18px_45px_rgba(3,31,70,0.22)] sm:px-10 md:px-14 md:py-8">
      <div className="text-center">
        <h2 className="font-display text-[28px] font-semibold uppercase leading-none tracking-[0.035em] sm:text-[32px]">
          {t("home.form.title")}
        </h2>
        <p className="mt-1 font-script text-[28px] leading-none sm:text-[34px]">
          {t("home.form.intro")}
        </p>
        <div className="mx-auto mt-3 flex w-40 items-center gap-2">
          <span className="h-px flex-1 bg-paris-blue" />
          <span className="h-px w-9 bg-white" />
          <span className="h-px flex-1 bg-paris-red" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-3 max-w-[620px]">
        <label className="sr-only" htmlFor="email">
          {t("home.form.emailLabel")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder={t("home.form.emailPlaceholder")}
          className="h-[62px] w-full rounded-[7px] border border-slate-200 bg-white px-6 text-base text-navy-900 outline-none transition placeholder:text-slate-500 focus:border-paris-blue focus:ring-4 focus:ring-paris-blue/20"
        />

        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-5 flex h-[70px] w-full items-center justify-center gap-4 rounded-[7px] bg-paris-red px-5 font-display text-lg font-bold uppercase tracking-[0.035em] text-white shadow-lg shadow-black/10 transition hover:bg-[#b90513] focus:outline-none focus:ring-4 focus:ring-white/30 disabled:cursor-not-allowed disabled:opacity-70 sm:text-[22px]"
        >
          {loading ? (
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          ) : (
            <FontAwesomeIcon name="gift" className="h-7 w-7" />
          )}
          {loading ? t("home.form.loading") : t("home.form.submit")}
        </button>

        {error ? (
          <p
            role="alert"
            className="mt-4 rounded-[6px] bg-red-50 px-4 py-3 text-center text-sm font-semibold text-red-700"
          >
            {error}
          </p>
        ) : null}
      </form>

      <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-white/85 sm:text-sm">
        <FontAwesomeIcon name="lock" className="h-4 w-4" />
        {t("home.form.secure")}
      </p>
    </div>
  );
}
