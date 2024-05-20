import type { Metadata } from "next";
import { Mitr } from "next/font/google";
import "./globals.css";

const inter = Mitr({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chainlink Tainwind CSS Effect",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
