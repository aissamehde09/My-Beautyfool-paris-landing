import type { Metadata } from "next";
import { I18nProvider } from "@/components/i18n-provider";
import { LanguageSwitcher } from "@/components/language-switcher";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://my-beautyfool-private-club.vercel.app"),
  title: "My Beautyfool Paris Private Club",
  description:
    "Join the My Beautyfool Paris Private Club and receive your welcome gift.",
  openGraph: {
    title: "My Beautyfool Paris Private Club",
    description:
      "Exclusive benefits, private offers and a welcome gift reserved for members.",
    images: ["/images/private-club-paris-view.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <I18nProvider>
          <LanguageSwitcher />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
