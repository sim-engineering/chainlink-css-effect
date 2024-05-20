import type { Metadata } from "next";
import { Mitr } from "next/font/google";
import "./globals.css";

const inter = Mitr({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simeon Arabov - Work Resume",
  description:
    "Daily winner gets the entire prize pool! The first FIAT and WEB3 integrated lottery game in the galaxy!",
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
