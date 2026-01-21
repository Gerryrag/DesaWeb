
import React from 'react';
import Hero from '../components/Hero';
import InfoWidgets from '../components/InfoWidgets';
import NewsCard from '../components/NewsCard';
import ProductCard from '../components/ProductCard';
// Added ArrowRight to imports
import { Users, Home as HomeIcon, ShoppingBag, Trophy, ArrowRight } from 'lucide-react';
import { NewsItem, UMKMProduct } from '../types';

const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'Pembangunan Jalan Desa Tahap 2 Dimulai Minggu Depan',
    excerpt: 'Pemerintah desa mengumumkan dimulainya perbaikan infrastruktur jalan sepanjang 2km untuk mempermudah akses ekonomi warga.',
    date: '12 Okt 2023',
    category: 'Infrastruktur',
    image: 'https://picsum.photos/id/101/600/400'
  },
  {
    id: '2',
    title: 'Peluncuran Program Ketahanan Pangan Nabati',
    excerpt: 'Warga desa diajak berpartisipasi dalam pemanfaatan lahan pekarangan untuk ditanami sayuran produktif guna menekan pengeluaran rumah tangga.',
    date: '08 Okt 2023',
    category: 'Perekonomian',
    image: 'https://picsum.photos/id/102/600/400'
  },
  {
    id: '3',
    title: 'Beasiswa Pendidikan untuk Anak Berprestasi Desa',
    excerpt: 'Pendaftaran beasiswa tingkat SMA dan Perguruan Tinggi resmi dibuka bagi putra-putri terbaik DesaConnect dengan syarat tertentu.',
    date: '05 Okt 2023',
    category: 'Pendidikan',
    image: 'https://picsum.photos/id/103/600/400'
  }
];

const mockProducts: UMKMProduct[] = [
  {
    id: '1',
    name: 'Keripik Tempe Renyah',
    owner: 'Ibu Sumarni',
    description: 'Olahan tempe kedelai pilihan dengan bumbu rempah tradisional tanpa pengawet.',
    price: 'Rp 15.000',
    image: 'https://picsum.photos/id/104/400/300'
  },
  {
    id: '2',
    name: 'Kopi Robusta Pegunungan',
    owner: 'Pak Haji Ahmad',
    description: 'Biji kopi asli dari perkebunan lereng bukit desa dengan proses sangrai tradisional.',
    price: 'Rp 45.000',
    image: 'https://picsum.photos/id/106/400/300'
  },
  {
    id: '3',
    name: 'Anyaman Bambu Estetik',
    owner: 'Kelompok Pengrajin Maju',
    description: 'Produk hiasan rumah dan wadah serbaguna yang ramah lingkungan dan tahan lama.',
    price: 'Rp 75.000',
    image: 'https://picsum.photos/id/107/400/300'
  }
];

const Home: React.FC = () => {
  const stats = [
    { label: 'Total Penduduk', value: '4,520', icon: <Users size={24} />, color: 'indigo' },
    { label: 'Kepala Keluarga', value: '1,240', icon: <HomeIcon size={24} />, color: 'emerald' },
    { label: 'UMKM Terdaftar', value: '85', icon: <ShoppingBag size={24} />, color: 'amber' },
    { label: 'Prestasi Desa', value: '12', icon: <Trophy size={24} />, color: 'rose' }
  ];

  return (
    <div className="bg-slate-50">
      <Hero />
      
      {/* Village Statistics - Moved after Banner & Styled Elegantly */}
      <section className="relative -mt-16 z-40 container mx-auto px-4 md:px-12">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/60 border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-sm ${
                  stat.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                  stat.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                  stat.color === 'amber' ? 'bg-amber-50 text-amber-600' : 'bg-rose-50 text-rose-600'
                }`}>
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-1 tracking-tight">{stat.value}</h3>
                <p className="text-slate-400 text-xs font-black uppercase tracking-widest">{stat.label}</p>
                {/* Separator line for desktop */}
                {idx < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-slate-100"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <InfoWidgets />
      
      {/* Latest News Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-indigo-600 font-black tracking-[0.2em] uppercase text-xs mb-3 block">Info Terkini</span>
              <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Warta Desa Terkini</h2>
              <p className="text-slate-500 font-medium">Ikuti terus perkembangan pembangunan dan kegiatan warga desa.</p>
            </div>
            <a href="#/berita/blog" className="hidden md:flex items-center gap-2 text-indigo-600 font-black text-sm uppercase tracking-wider hover:translate-x-2 transition-transform">
              Lihat Semua Berita <ArrowRight size={18} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {mockNews.map(news => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured UMKM Section */}
      <section className="py-24 bg-white rounded-[4rem] mx-4 md:mx-12 my-12 border border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="bg-emerald-50 text-emerald-600 px-4 py-1 rounded-full font-black tracking-widest uppercase text-[10px] mb-6">Produk Kebanggaan</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">UMKM Unggulan DesaConnect</h2>
            <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
              Dukung produk lokal karya warga desa kami yang diproses secara tradisional dengan kualitas yang bersaing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {mockProducts.map(product => (
              <ProductCard key={product.id} product={{...product, category: 'Unggulan', location: 'DesaConnect'}} />
            ))}
          </div>
          <div className="mt-20 text-center">
            <a 
              href="#/ekonomi"
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-12 py-5 rounded-[2rem] font-black hover:bg-black transition-all shadow-xl shadow-slate-200"
            >
              JELAJAHI PRODUK DESA <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
