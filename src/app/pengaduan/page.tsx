import Chatbot from '@/components/Chatbot';

export default function PengaduanPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Chatbot Pengaduan</h1>
      <p className="text-center text-gray-500 mb-8">
        Ikuti percakapan dengan bot untuk melengkapi data pengaduan Anda.
      </p>
      <Chatbot />
    </div>
  );
}