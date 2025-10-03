import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notes — Home",
  description: "A minimalist notes app with Ocean Professional theme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
