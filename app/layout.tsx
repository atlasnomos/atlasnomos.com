import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // [!code highlight]
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({ // [!code highlight]
  variable: "--font-jetbrains-mono", // [!code highlight]
  subsets: ["latin"], // [!code highlight]
}); // [!code highlight]

export const metadata: Metadata = {
  title: "ATLAS NOMOS | The Governance Kernel for Sovereign AI",
  description: "ATLAS v1.1: An experimental governance framework for AI agent execution. Technical audit trails for engineering teams.",
};

import { Navbar } from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-navy text-silver font-sans`} // [!code highlight]
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
