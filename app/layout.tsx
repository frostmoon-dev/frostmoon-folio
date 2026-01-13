import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Welcome — Zerotrillion",
  description: "We're a global creative agency based in New York, Amsterdam and Toronto helping brands overcome growth-limiting challenges with moonshot creativity in branding, advertising and public relations.",
  openGraph: {
    type: "website",
    title: "Welcome — Zerotrillion",
    description: "We're a global creative agency based in New York, Amsterdam and Toronto helping brands overcome growth-limiting challenges with moonshot creativity in branding, advertising and public relations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome — Zerotrillion",
    description: "We're a global creative agency based in New York, Amsterdam and Toronto helping brands overcome growth-limiting challenges with moonshot creativity in branding, advertising and public relations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
