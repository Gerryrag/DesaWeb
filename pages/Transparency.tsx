
import React from 'react';
import { DollarSign, PieChart as ChartIcon, FileText, Download, Target, TrendingUp } from 'lucide-react';

const Transparency: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-20">
          <span className="bg-indigo-100 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Akuntabilitas</span>
          <h1 className="text-5xl font-black text-slate-900 mt-6 mb-6 tracking-tight">Transparansi Anggaran</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Informasi terbuka penggunaan dana desa dan alokasi pembangunan tahun anggaran 2023-2024.</p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { 
              label: 'Total Pendapatan Desa', 
              val: 'Rp 2.450.000.000', 
              icon: <DollarSign />, 
              color: 'emerald',
              desc: 'Dari DD, ADD, dan PADes' 
            },
            { 
              label: 'Dana Terealisasi', 
              val: 'Rp 1.820.500.000', 
              icon: <TrendingUp />, 
              color: 'indigo',
              desc: '74.3% Penyerapan Anggaran' 
            },
            { 
              label: 'Total Program Kerja', 
              val: '24 Kegiatan', 
              icon: <Target />, 
              color: 'amber',
              desc: 'Pembangunan & Pemberdayaan' 
            }
          ].map((item, idx) => (
            <div key={idx} className={`p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300`}>
              <div className={`absolute top-0 left-0 w-2 h-full bg-${item.color}-500`}></div>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-${item.color}-50 text-${item.color}-600`}>
                {item.icon}
              </div>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">{item.label}</p>
              <h3 className="text-3xl font-black text-slate-900 mb-2">{item.val}</h3>
              <p className={`text-xs font-bold text-${item.color}-600 bg-${item.color}-50 inline-block px-3 py-1 rounded-full`}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Realization Section */}
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-indigo-100/30 border border-indigo-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full -mr-48 -mt-48 opacity-50"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-slate-900 mb-12 flex items-center gap-4">
              <span className="bg-indigo-600 w-2 h-10 rounded-full"></span>
              Laporan Realisasi Bidang
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-10">
                {[
                  { name: 'Penyelenggaraan Pemerintahan', value: 35, color: 'bg-indigo-500' },
                  { name: 'Pelaksanaan Pembangunan', value: 45, color: 'bg-emerald-500' },
                  { name: 'Pembinaan Kemasyarakatan', value: 12, color: 'bg-purple-500' },
                  { name: 'Pemberdayaan Masyarakat', value: 8, color: 'bg-amber-500' }
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-black text-slate-700 uppercase tracking-tight text-sm">{item.name}</span>
                      <span className="text-lg font-black text-slate-900">{item.value}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-4 p-1 overflow-hidden">
                      <div className={`${item.color} h-full rounded-full transition-all duration-1000 ease-out shadow-lg`} style={{ width: `${item.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col justify-center bg-indigo-50/50 p-10 rounded-3xl border border-indigo-100">
                <FileText size={48} className="text-indigo-600 mb-6" />
                <h3 className="text-2xl font-black text-slate-900 mb-4">Akses Data Terbuka</h3>
                <p className="text-slate-500 mb-10 leading-relaxed font-medium">
                  Sebagai bentuk komitmen transparansi, kami menyediakan dokumen APBDes lengkap untuk dipelajari oleh seluruh warga desa.
                </p>
                <button className="flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-black transition-all shadow-xl shadow-indigo-600/30">
                  <Download size={20} />
                  UNDUH LAPORAN APBDES (.PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transparency;
