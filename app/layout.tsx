import React from "react";
import type { Metadata, Viewport } from "next";

import SmoothScrolling from "@/components/smooth-scroll";
import "../styles/theme.css";
import { kanit, nexaHeavy, nexaLight, nexaRegular } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://rentalverse.com"),
  title: {
    default: "RentalVerse — Unlock the Future of Workspaces",
    template: "%s | RentalVerse",
  },
  description:
    "RentalVerse offers secure, innovative virtual office spaces for modern businesses. Rent, sub-rent, and scale your digital workspace with confidence.",
  keywords: [
    "virtual office",
    "RentalVerse",
    "remote workspace",
    "secure meetings",
    "RentalMiner",
    "digital workspace",
  ],
  authors: [{ name: "RentalVerse" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rentalverse.com",
    siteName: "RentalVerse",
    title: "RentalVerse — Unlock the Future of Workspaces",
    description:
      "Secure, innovative virtual office spaces for modern businesses. Join the future of work with RentalVerse.",
    images: [
      {
        url: "/assets/images/header-center.webp",
        width: 1200,
        height: 630,
        alt: "RentalVerse virtual workspace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RentalVerse — Unlock the Future of Workspaces",
    description:
      "Secure, innovative virtual office spaces for modern businesses.",
    images: ["/assets/images/header-center.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#05121E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nexaLight.variable} ${kanit.variable} ${nexaRegular.variable} ${nexaHeavy.variable}`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/images/header-bg.webp"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className="font-nexa antialiased">
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
