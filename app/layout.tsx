import GlobalLayout from "@components/GlobalLayout";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

export interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: "%s | Smart Living Management",
    default: "Smart Living Management",
  },
  description: "Smart Living Management",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased bg-white dark:bg-black`}>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
