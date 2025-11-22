import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EU Market Analysis: FlyBird Cat Backpack",
  description:
    "Comprehensive go-to-market analysis for the FlyBird cat backpack targeting European Facebook Ads campaigns."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
