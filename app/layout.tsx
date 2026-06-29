import type { Metadata } from "next";
import "./globals.css";

import Shell from "@/components/layout/Shell";

export const metadata: Metadata = {
  title: "PolySignal",
  description: "Prediction Market Intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0D10] text-white">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}