import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "./_providers/ReactQueryProvider";
import CustomThemeController from "./(saas)/_providers/CustomThemeController";

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
    <ReactQueryProvider>
      <CustomThemeController>{children}</CustomThemeController>
    </ReactQueryProvider>
  );
}
