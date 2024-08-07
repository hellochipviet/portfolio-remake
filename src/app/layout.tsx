import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./aos";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chip Viet - Digital Designer",
  description: "Chip Viet - Digital Designer based in California",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AOSInit />
        <div className="flex flex-col">
          <main className="min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
