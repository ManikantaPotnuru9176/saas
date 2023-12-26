import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saas App",
  description: "This is a saas app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
