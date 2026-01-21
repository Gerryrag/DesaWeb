
import React from 'react';
import { Bell, Calendar, FileText, ChevronRight, Info } from 'lucide-react';

const announcements = [
  { 
    id: '1', 
    title: 'Jadwal Pengambilan Sertifikat Tanah PTSL', 
    date: '15 Okt 2023', 
    type: 'Jadwal',
    content: 'Diberitahukan kepada warga Dusun I bahwa pembagian sertifikat akan dilaksanakan di Aula Desa mulai pukul 09.00 WIB.'
  },
  { 
    id: '2', 
    title: 'Peraturan Desa No. 4 Tahun 2023 Tentang Sampah', 
    date: '10 Okt 2023', 
    type: 'Peraturan',
    content: 'Kebijakan baru mengenai pengelolaan sampah rumah tangga dan sanksi pembuangan sampah sembarangan.'
  },
  { 
    id: '3', 
    title: 'Pemberitahuan Pemadaman Listrik Bergilir', 
    date: '08 Okt 2023', 
    type: 'Informasi',
    content: 'Sehubungan dengan pemeliharaan jaringan, akan dilakukan pemadaman di area RT 01 - 04 pada hari Selasa depan.'
  },
  { 
    id: '4', 
    title: 'Pendaftaran BLT Dana Desa Tahap Akhir', 
    date: '05 Okt 2023', 
    type: 'Kebijakan',
    content: 'Warga yang memenuhi kriteria diharapkan mengumpulkan berkas verifikasi di kantor desa paling lambat akhir pekan ini.'
  }
];

const Announcements: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex p-3 bg-red-100 text-red-600 rounded-2xl mb-6">
            <Bell size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pengumuman Resmi</h1>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Informasi penting, jadwal kegiatan, dan peraturan terbaru dari Pemerintah DesaConnect.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {announcements.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-2xl shrink-0 ${
                    item.type === 'Peraturan' ? 'bg-blue-50 text-blue-600' : 
                    item.type === 'Jadwal' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {item.type === 'Peraturan' ? <FileText size={24} /> : <Calendar size={24} />}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{item.type}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="text-xs text-gray-500 font-medium">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-gray-900 bg-gray-50 px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors shrink-0">
                  Detail <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-6">
            <div className="p-3 bg-white/20 rounded-xl">
              <Info size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Berlangganan Notifikasi?</h3>
              <p className="text-blue-100 text-sm">Dapatkan pengumuman langsung melalui WhatsApp/Email Anda.</p>
            </div>
          </div>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors whitespace-nowrap">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
