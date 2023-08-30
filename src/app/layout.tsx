import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

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
      <body className="bg-zinc-200 dark:bg-zinc-800 min-h-screen">
        <div className="container max-w-7xl mx-auto">
          <Navbar />
        </div>
        <div className="container max-w-7xl mx-auto text-gray-700 dark:text-gray-400">
          {children}
        </div>
        <div className="sticky top-[100vh] m-2">
          <Footer />
        </div>
      </body>
    </html>
  );
}
