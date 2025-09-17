import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "RPM Motors - Sua oficina de confiança",
  description: "A melhor oficina de carros de Belo Horizonte e região.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  keywords: [
    "carros",
    "oficina",
    "BH",
    "belo horizonte",
    "oficina de carros",
    "manutenção de carros",
  ],
  openGraph: {
    title: "RPM Motors - Sua oficina de confiança",
    description: "A melhor oficina de carros de Belo Horizonte e região.",
    siteName: "RPM Motors",
    locale: "pt-BR",
    type: "website",
    images: [`${process.env.NEXT_PUBLIC_URL}/opempgraph-img.jpg`],
    url: process.env.NEXT_PUBLIC_URL,
  },
  icons: {
    icon: `${process.env.NEXT_PUBLIC_URL}/favicon.ico`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
