import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Poke-Dex",
  description: "App Poke-Dex with Nextjs ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Menu />
        {children}
        <footer className="bg-gray-900 text-white py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-2xl font-bold tracking-wide">Poke-Dex</h1>
            <p className="text-gray-400 mt-2">
              Todos os direitos reservados © 2026
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="hover:text-yellow-400 transition">
                Home
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                Pokémons
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                Contato
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
