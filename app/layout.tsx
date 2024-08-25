import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";

const inter = Lexend_Deca({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GoNexpe",
  description: "Pay as you go Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
