import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "RPM Motors",
  description: "A melhor oficina de carros de Belo Horizonte e região.",
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
      </body>
    </html>
  );
}
