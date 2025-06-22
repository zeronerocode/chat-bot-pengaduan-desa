import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Layanan Pengaduan Publik",
  description: "Website layanan pengaduan publik dengan chatbot interaktif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50 font-sans`}>
        <header className="bg-white shadow-md sticky top-0 z-10">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-gray-800">
                Pengaduan<span className="text-blue-600">Desa</span>
              </Link>
              <div className="flex items-center space-x-6">
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Beranda
                </Link>
                <Link href="/profil" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Profil
                </Link>
                <Link href="/pengaduan" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow">
                  Buat Pengaduan
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow container mx-auto px-6 py-8">
          {children}
        </main>

        <footer className="bg-white py-4 mt-8 border-t">
          <div className="container mx-auto px-6 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Layanan Pengaduan Publik. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}