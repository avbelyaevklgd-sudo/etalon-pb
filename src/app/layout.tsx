import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Эталон-ПБ | Решения в производственной безопасности",
  description: "Экспертные решения в области производственной безопасности: супервайзинг, аудит, управление рисками, сопровождение и обучение.",
  keywords: ["Эталон-ПБ", "производственная безопасность", "супервайзинг", "аудит", "риски", "обучение безопасности"],
  authors: [{ name: "Эталон-ПБ" }],
  icons: {
    icon: "/logo-etalon.jpg",
  },
  openGraph: {
    title: "Эталон-ПБ",
    description: "Решения в производственной безопасности",
    url: "https://etalon-pb.kg",
    siteName: "Эталон-ПБ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
