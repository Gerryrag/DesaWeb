
import React from 'react';
import { FileDown, Calendar, CheckCircle2, Search } from 'lucide-react';

const reports = [
  { id: '1', title: 'Laporan Realisasi APBDes Kuartal III 2023', date: '30 Sep 2023', type: 'Keuangan', status: 'Selesai' },
  { id: '2', title: 'Laporan Kegiatan Bulanan - September 2023', date: '01 Okt 2023', type: 'Umum', status: 'Selesai' },
  { id: '3', title: 'Laporan Monitoring Pembangunan Jembatan', date: '25 Sep 2023', type: 'Infrastruktur', status: 'Proses' },
  { id: '4', title: 'Laporan Tahunan DesaConnect Tahun 2022', date: '05 Jan 2023', type: 'Tahunan', status: 'Selesai' },
];

const Reports: React.FC = () => {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Laporan Kegiatan Desa</h1>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Dokumentasi dan pertanggungjawaban kegiatan operasional serta pembangunan DesaConnect secara berkala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reports.map((report) => (
            <div key={report.id} className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-gray-100 rounded-xl text-gray-700">
                  <Calendar size={24} />
                </div>
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${
                  report.status === 'Selesai' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'
                }`}>
                  {report.status}
                </span>
              </div>
              
              <div className="flex-grow">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">{report.type}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{report.title}</h3>
                <div className="flex items-center text-sm text-gray-500 gap-2 mb-6">
                  <CheckCircle2 size={16} className="text-green-500" />
                  Divalidasi pada {report.date}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-400">Format: PDF (2.4 MB)</span>
                <button className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors">
                  <FileDown size={18} />
                  Unduh Laporan
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-gray-50 rounded-3xl border border-gray-200 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Mencari Laporan Spesifik?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
            <input 
              type="text" 
              placeholder="Cari berdasarkan tahun atau kata kunci..." 
              className="flex-grow bg-white border border-gray-200 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-black/5 transition-all text-sm"
            />
            <button className="bg-black text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
              <Search size={18} /> Cari
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
