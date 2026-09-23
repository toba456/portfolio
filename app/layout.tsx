import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import { getLocale } from "next-intl/server";
import { SITE_URL } from "@/lib/content";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tobias Marroquin — Frontend Engineer",
  description:
    "Frontend Engineer with 4+ years of experience building pixel-perfect interfaces and high-performance mobile apps with React & React Native.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tobias Marroquin — Frontend Engineer",
    description:
      "Frontend Engineer specializing in React & React Native. Building great user experiences.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/avatar.webp",
        width: 1185,
        height: 1692,
        alt: "Tobias Marroquin",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={kanit.variable}>
      <body className="bg-ink text-mist antialiased">{children}</body>
    </html>
  );
}
