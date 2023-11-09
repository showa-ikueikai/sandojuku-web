import type { Metadata } from "next";

import { SITE } from "@/src/config";

import Navbar from "@/src/components/widgets/Navbar";

import "@/src/assets/styles/base.css";
import React from "react";
import Footer from "@/src/components/widgets/Footer";

export const metadata: Metadata = {
  title: {
    template: `%s - ${SITE.name}`,
    default: SITE.title,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
