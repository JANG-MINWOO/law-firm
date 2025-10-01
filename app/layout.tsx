import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "송지훈 법률사무소 - 믿음직한 법률 파트너",
  description: "N0년 전통의 송지훈 법률사무소. 민사, 형사, 가사, 기업법무 전문 변호사들이 함께합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}