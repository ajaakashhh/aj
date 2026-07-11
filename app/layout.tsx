import type { Metadata } from "next";
import { Anton, Archivo, Fraunces } from "next/font/google";
import "./globals.css";

const display = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "Aakash Srividhya, Writer & Filmmaker in Chennai",
  description:
    "Writer and filmmaker based in Chennai, exploring political narratives and cultural commentary through long-form journalism and short-form content.",
  openGraph: {
    title: "Aakash Srividhya, Writer & Filmmaker",
    description:
      "Political narratives and cultural commentary through long-form journalism and short-form content. Chennai.",
    type: "website",
  },
  metadataBase: new URL("https://aakash-srividhya.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${serif.variable}`}>
      <body className="grain font-serif antialiased">{children}</body>
    </html>
  );
}
