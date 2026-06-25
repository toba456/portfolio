import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Tobias Marroquin — Frontend Engineer",
  description:
    "Frontend Engineer with 4+ years of experience building pixel-perfect interfaces and high-performance mobile apps with React & React Native.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Tobias Marroquin — Frontend Engineer",
    description:
      "Frontend Engineer specializing in React & React Native. Building great user experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  );
}
