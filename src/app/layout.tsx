import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPVSP",
  description: "Snoqualmie Pass Volunteer Ski Patrol - WEST",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-slate-200">
        <Navbar />
        <div className="container max-w-7xl mx-auto h-full pt-1">{children}</div>
      </body>
    </html>
  );
}
