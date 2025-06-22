import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <div className="bg-white p-12 rounded-xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Selamat Datang di Layanan Pengaduan Publik
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Kami siap membantu Anda. Sampaikan pengaduan, keluhan, atau aspirasi Anda dengan mudah melalui chatbot interaktif kami.
        </p>
        <Link href="/pengaduan" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">
          Mulai Buat Pengaduan
        </Link>
      </div>
    </div>
  );
}