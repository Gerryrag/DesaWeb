
import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, ShieldCheck, Info, Heart, LifeBuoy } from 'lucide-react';

const Aspirations: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    nik: '',
    category: 'Saran',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', nik: '', category: 'Saran', content: '' });
    }, 1500);
  };

  return (
    <div className="py-24 bg-slate-50 min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-purple-100/30 blur-[120px] -z-10 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-indigo-100/30 blur-[120px] -z-10 rounded-full"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex p-4 bg-purple-600 text-white rounded-[2rem] mb-8 shadow-xl shadow-purple-200">
              <MessageSquare size={40} />
            </div>
            <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Suara Anda, Masa Depan Desa</h1>
            <p className="text-slate-500 max-w-xl mx-auto text-lg font-medium leading-relaxed">
              Jadilah bagian dari pembangunan DesaConnect. Setiap masukan anda adalah bahan bakar inovasi kami.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Sidebar Info - Modernized */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-2 h-6 bg-purple-600 rounded-full"></div>
                  Panduan Penyampaian
                </h3>
                <ul className="space-y-6">
                  {[
                    { text: 'Pilih kategori yang paling sesuai dengan pesan anda.', icon: <Info size={16} /> },
                    { text: 'Gunakan bahasa yang santun demi kenyamanan bersama.', icon: <Heart size={16} /> },
                    { text: 'Lampirkan data yang valid untuk mempercepat tindak lanjut.', icon: <ShieldCheck size={16} /> }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <p className="text-sm text-slate-600 font-semibold leading-relaxed">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-purple-200 relative overflow-hidden group">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <LifeBuoy size={48} className="mb-6 opacity-40" />
                <h4 className="text-2xl font-black mb-4">Butuh Bantuan Langsung?</h4>
                <p className="text-purple-100 mb-8 leading-relaxed font-medium">
                  Jika masalah anda bersifat darurat, silakan hubungi tim respon cepat kantor desa via WhatsApp.
                </p>
                <button className="bg-white text-purple-600 px-8 py-3.5 rounded-2xl font-black shadow-lg hover:scale-105 transition-all text-sm uppercase tracking-wider">
                  Hubungi Admin
                </button>
              </div>
            </div>

            {/* Main Form - Style Refined */}
            <div className="lg:col-span-3">
              <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-indigo-100/30">
                {isSuccess ? (
                  <div className="py-16 text-center animate-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
                      <CheckCircle2 size={56} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4">Berhasil Terkirim!</h3>
                    <p className="text-slate-500 mb-10 text-lg">Suara anda telah kami terima. Kami akan segera meninjau dan merespon dalam waktu maksimal 2x24 jam.</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200"
                    >
                      Kirim Masukan Lainnya
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.1em]">Nama Lengkap</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none text-sm font-bold transition-all text-slate-800 placeholder:text-slate-300"
                          placeholder="Sesuai Kartu Identitas"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.1em]">Nomor NIK</label>
                        <input 
                          required
                          type="text" 
                          value={formData.nik}
                          onChange={(e) => setFormData({...formData, nik: e.target.value})}
                          className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none text-sm font-bold transition-all text-slate-800 placeholder:text-slate-300"
                          placeholder="16 Digit NIK"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-[0.1em]">Jenis Aspirasi</label>
                      <div className="flex flex-wrap gap-3">
                        {['Saran', 'Keluhan', 'Apresiasi'].map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setFormData({...formData, category: cat})}
                            className={`flex-1 py-4 rounded-2xl text-xs font-black border-2 transition-all ${
                              formData.category === cat 
                                ? 'bg-purple-600 border-purple-600 text-white shadow-xl shadow-purple-100 scale-105' 
                                : 'bg-white border-slate-100 text-slate-400 hover:border-purple-200 hover:text-purple-600'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-[0.1em]">Detail Pesan</label>
                      <textarea 
                        required
                        rows={6}
                        value={formData.content}
                        onChange={(e) => setFormData({...formData, content: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-transparent rounded-3xl px-6 py-5 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none text-sm font-bold transition-all resize-none text-slate-800 placeholder:text-slate-300 leading-relaxed"
                        placeholder="Uraikan maksud dan tujuan anda secara jelas..."
                      ></textarea>
                    </div>

                    <div className="pt-6">
                      <button 
                        disabled={isSubmitting}
                        className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-black hover:scale-[1.01] active:scale-95 transition-all shadow-2xl shadow-slate-300 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <Send size={20} />
                            SUBMIT ASPIRASI SAYA
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[10px] text-slate-400 text-center font-bold uppercase tracking-widest opacity-60">
                      Sistem Pelaporan Mandiri DesaConnect &copy; 2024
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aspirations;
