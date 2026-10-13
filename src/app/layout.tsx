import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import LinesBackground from "./components/lines-bg";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], display: "swap" });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Alpha 4 Labs | Software Engineering & Digital Products",
    template: "%s | Alpha 4 Labs",
  },
  description:
    "Alpha 4 Labs designs and builds web platforms, mobile apps, cloud infrastructure and AI solutions for growing businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${jetbrains.variable} min-h-screen flex flex-col antialiased`}>
        <LinesBackground />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
