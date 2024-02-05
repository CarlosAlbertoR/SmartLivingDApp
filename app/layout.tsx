import "./globals.css";
import "./animate.css";

import GlobalLayout from "@components/GlobalLayout";
import { Web3authProvider } from "@config/web3auth";
import { StoreProvider } from "@store/provider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Smart Living Management",
    default: "Smart Living Management",
  },
  description: "Smart Living Management",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        <StoreProvider>
          <Web3authProvider>
            <GlobalLayout>{children}</GlobalLayout>
          </Web3authProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
