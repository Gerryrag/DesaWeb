
import React, { useState } from 'react';
import { FileText, Download, ExternalLink, Info, X, Send, CheckCircle2, Loader2, Printer, FileDown } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { jsPDF } from "jspdf";

interface ServiceItem {
  id: string;
  category: 'surat' | 'izin' | 'lainnya';
  title: string;
  description: string;
  requirements: string[];
  estimation: string;
}

const servicesData: ServiceItem[] = [
  // Surat Keterangan
  {
    id: 'domisili',
    category: 'surat',
    title: 'Surat Keterangan Domisili',
    description: 'Dokumen bukti tempat tinggal sementara bagi warga pendatang.',
    requirements: ['Fotokopi KTP & KK', 'Surat Pengantar RT/RW', 'Pas foto 3x4 (2 lembar)'],
    estimation: '1 Hari Kerja',
  },
  {
    id: 'sktm',
    category: 'surat',
    title: 'Surat Keterangan Tidak Mampu (SKTM)',
    description: 'Untuk keperluan beasiswa, kesehatan (BPJS), atau bantuan sosial.',
    requirements: ['Fotokopi KTP & KK', 'Surat Pengantar RT/RW', 'Foto rumah (depan & dalam)'],
    estimation: '1-2 Hari Kerja',
  },
  {
    id: 'kelahiran',
    category: 'surat',
    title: 'Surat Keterangan Kelahiran',
    description: 'Pengantar untuk pembuatan Akta Kelahiran di Disdukcapil.',
    requirements: ['Surat Keterangan Bidan/RS', 'Fotokopi Buku Nikah', 'Fotokopi KTP Orang Tua & Saksi'],
    estimation: '1 Hari Kerja',
  },
  {
    id: 'skck',
    category: 'surat',
    title: 'Pengantar SKCK',
    description: 'Surat pengantar untuk pembuatan SKCK di kepolisian.',
    requirements: ['Fotokopi KTP & KK', 'Surat Pengantar RT/RW', 'Pas foto 4x6 (background merah)'],
    estimation: '1 Hari Kerja',
  },
  // Perizinan
  {
    id: 'izin-usaha',
    category: 'izin',
    title: 'Izin Usaha (IUMK)',
    description: 'Legalitas untuk pelaku usaha mikro dan kecil di wilayah desa.',
    requirements: ['Fotokopi KTP', 'Pas foto 3x4', 'Surat Pengantar RT/RW'],
    estimation: '2-3 Hari Kerja',
  },
  {
    id: 'izin-perjalanan',
    category: 'izin',
    title: 'Izin Perjalanan/Keramaian',
    description: 'Izin penyelenggaraan acara atau pengantar perjalanan kelompok.',
    requirements: ['Identitas Penanggung Jawab', 'Detail Rencana Kegiatan', 'Persetujuan Lingkungan'],
    estimation: '2 Hari Kerja',
  },
  // Lainnya
  {
    id: 'laporan-kehilangan',
    category: 'lainnya',
    title: 'Pengantar Laporan Kehilangan',
    description: 'Dokumen awal untuk mengurus surat kehilangan di kepolisian.',
    requirements: ['Identitas Pelapor', 'Keterangan barang yang hilang'],
    estimation: 'Langsung Jadi',
  }
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'surat' | 'izin' | 'lainnya'>('surat');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDoc, setGeneratedDoc] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const filteredServices = servicesData.filter(s => s.category === activeTab);

  const handleOpenForm = (service: ServiceItem) => {
    setSelectedService(service);
    setIsFormOpen(true);
    setIsSuccess(false);
  };

  const handleGenerateDoc = async (service: ServiceItem) => {
    setSelectedService(service);
    setIsGenerating(true);
    setIsPreviewOpen(true);
    setGeneratedDoc('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Buatkan draf surat resmi pemerintah desa yang sangat formal untuk layanan: ${service.title}. 
        Format harus mencakup:
        1. KOP SURAT (PEMERINTAH KABUPATEN SEJAHTERA, KECAMATAN MAJU JAYA, DESA DESACONNECT).
        2. Alamat Kantor Desa: Jl. Raya Desa No. 123.
        3. Judul Surat Besar di Tengah.
        4. Nomor Surat (Gunakan format: 400/012/DS-CNCT/III/2024).
        5. Isi surat dengan titik-titik (..........) untuk bagian data pemohon.
        6. Kalimat penutup resmi.
        7. Bagian tanda tangan Kepala Desa (Dr. Ahmad Sujadi) lengkap dengan stempel (simulasi teks).
        
        Gunakan Bahasa Indonesia yang baku dan pastikan layoutnya terlihat seperti dokumen fisik yang nyata. 
        Output HANYA berupa teks isi surat saja, tanpa komentar apa pun di awal atau akhir.`,
      });

      setGeneratedDoc(response.text || 'Gagal menghasilkan dokumen. Silakan coba lagi.');
    } catch (error) {
      console.error("Gemini Error:", error);
      setGeneratedDoc("Terjadi kesalahan saat menghubungi server AI. Mohon pastikan koneksi internet Anda stabil.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadPDF = () => {
    if (!generatedDoc) return;
    
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Simple styling for PDF
    doc.setFont("times", "normal");
    doc.setFontSize(11);
    
    // Handle word wrapping for long text
    const splitText = doc.splitTextToSize(generatedDoc, 170);
    doc.text(splitText, 20, 30);
    
    doc.save(`Formulir_${selectedService?.title.replace(/\s+/g, '_')}.pdf`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsFormOpen(false);
        setIsSuccess(false);
        setSelectedService(null);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Layanan Publik</h1>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Akses berbagai layanan administrasi desa secara mudah dan transparan. Silakan pilih jenis layanan yang Anda butuhkan di bawah ini.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 p-1.5 rounded-2xl shadow-inner">
            {['surat', 'izin', 'lainnya'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-8 py-2.5 rounded-xl font-semibold transition-all duration-200 capitalize ${
                  activeTab === tab
                    ? 'bg-white text-black shadow-md'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab === 'surat' ? 'Surat Keterangan' : tab === 'izin' ? 'Perizinan' : 'Lainnya'}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gray-100 rounded-xl text-gray-700">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{service.description}</p>
                </div>
              </div>

              <div className="mb-8 flex-grow">
                <div className="flex items-center gap-2 mb-3 text-gray-900 font-bold text-sm">
                  <Info size={16} />
                  <span>Persyaratan:</span>
                </div>
                <ul className="space-y-2">
                  {service.requirements.map((req, i) => (
                    <li key={i} className="flex items-center text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 shrink-0"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between border-t border-gray-50 pt-6 mt-auto">
                <div className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-bold">
                  Estimasi: {service.estimation}
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleGenerateDoc(service)}
                    className="flex items-center gap-2 bg-white border border-gray-200 text-gray-900 px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors"
                  >
                    <Download size={16} />
                    Formulir
                  </button>
                  <button 
                    onClick={() => handleOpenForm(service)}
                    className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Ajukan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Document Preview Modal (Gemini Powered) */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="bg-white rounded-3xl w-full max-w-2xl h-[85vh] flex flex-col shadow-2xl animate-in zoom-in duration-300">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-3xl">
              <div>
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <FileDown size={20} className="text-red-600" />
                  Pratinjau PDF Dokumen
                </h3>
                <p className="text-gray-500 text-xs">Desain resmi siap cetak untuk warga DesaConnect</p>
              </div>
              <button 
                onClick={() => setIsPreviewOpen(false)}
                className="p-2 hover:bg-white rounded-full transition-colors shadow-sm"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-grow p-8 overflow-y-auto bg-gray-200 flex justify-center">
              <div className="bg-white w-full max-w-lg min-h-[700px] p-12 shadow-2xl border border-gray-300 rounded-sm font-serif text-[12px] leading-relaxed whitespace-pre-wrap relative text-gray-800">
                {isGenerating ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-[2px]">
                    <div className="relative">
                      <Loader2 className="w-12 h-12 animate-spin text-red-500 mb-4" />
                      <div className="absolute inset-0 animate-ping opacity-20 bg-red-400 rounded-full scale-150"></div>
                    </div>
                    <p className="text-gray-900 font-bold animate-pulse tracking-wide">MENYUSUN DOKUMEN RESMI PDF...</p>
                    <p className="text-gray-400 text-[10px] mt-2 italic uppercase">Powered by Village AI Engine</p>
                  </div>
                ) : (
                  <div className="animate-in fade-in duration-1000">
                    {generatedDoc}
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 bg-white border-t border-gray-100 flex justify-end gap-3 rounded-b-3xl shadow-inner">
              <button 
                onClick={() => setIsPreviewOpen(false)}
                className="px-6 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
              <button 
                disabled={isGenerating}
                onClick={handleDownloadPDF}
                className="bg-red-600 text-white px-10 py-3 rounded-xl font-bold flex items-center gap-3 hover:bg-red-700 transition-all shadow-xl shadow-red-100 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-95"
              >
                <FileDown size={20} />
                UNDUH SEBAGAI PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {isFormOpen && selectedService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Pengajuan: {selectedService.title}</h3>
                <p className="text-gray-500 text-xs mt-0.5 uppercase tracking-wide">Sistem Pengajuan Mandiri Desa</p>
              </div>
              <button 
                onClick={() => setIsFormOpen(false)}
                className="p-2 hover:bg-white rounded-full transition-colors shadow-sm"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8">
              {isSuccess ? (
                <div className="py-12 flex flex-col items-center text-center animate-in slide-in-from-bottom-4 duration-500">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-inner">
                    <CheckCircle2 size={56} />
                  </div>
                  <h4 className="text-2xl font-extrabold text-gray-900 mb-2">Pengajuan Terkirim!</h4>
                  <p className="text-gray-600 mb-6 max-w-xs mx-auto text-sm">Data Anda sudah masuk ke sistem kami. Petugas akan segera memvalidasi berkas Anda.</p>
                  <div className="bg-gray-100 px-6 py-3 rounded-2xl border border-gray-200">
                    <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">ID Registrasi Warga</p>
                    <p className="text-lg font-mono font-bold text-gray-900">#DS-CNCT-{Math.floor(1000 + Math.random() * 8999)}</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-tight">Nama Lengkap</label>
                      <input required type="text" className="w-full bg-gray-100 border-none rounded-2xl px-5 py-3.5 focus:ring-2 focus:ring-black outline-none text-sm transition-all" placeholder="Input sesuai KTP" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-tight">Nomor NIK</label>
                      <input required type="text" className="w-full bg-gray-100 border-none rounded-2xl px-5 py-3.5 focus:ring-2 focus:ring-black outline-none text-sm transition-all" placeholder="16 digit angka" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-tight">Kontak WhatsApp</label>
                    <input required type="tel" className="w-full bg-gray-100 border-none rounded-2xl px-5 py-3.5 focus:ring-2 focus:ring-black outline-none text-sm transition-all" placeholder="Untuk notifikasi pengambilan" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-tight">Alasan Pengajuan</label>
                    <textarea required rows={3} className="w-full bg-gray-100 border-none rounded-2xl px-5 py-3.5 focus:ring-2 focus:ring-black outline-none text-sm transition-all resize-none" placeholder="Tuliskan tujuan Anda..."></textarea>
                  </div>

                  <div className="p-5 bg-blue-50 rounded-2xl flex gap-4 border border-blue-100 shadow-sm">
                    <Info size={20} className="text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-blue-800 leading-relaxed font-medium italic">
                      Mohon siapkan dokumen fisik penunjang untuk dibawa saat pengambilan surat di Kantor DesaConnect agar proses verifikasi berjalan lancar.
                    </p>
                  </div>

                  <div className="pt-6 flex gap-3">
                    <button 
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="flex-1 bg-gray-100 text-gray-600 font-bold py-4 rounded-2xl hover:bg-gray-200 transition-colors text-sm uppercase tracking-wide"
                    >
                      Tutup
                    </button>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-black text-white font-bold py-4 rounded-2xl hover:bg-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-xl"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send size={18} />
                          Kirim Data
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
