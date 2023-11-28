import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "../../hooks/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MeowGPT",
  description: "An imitation for ChatGPT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>
          <Toaster position="top-center" />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
