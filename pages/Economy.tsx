
import React, { useState, useMemo } from 'react';
import { Search, MapPin, Tag, ShoppingBag, ArrowRight } from 'lucide-react';

interface UMKMProduct {
  id: string;
  name: string;
  owner: string;
  description: string;
  category: string;
  location: string;
  image: string;
}

const allProducts: UMKMProduct[] = [
  { 
    id: '1', 
    name: 'Kopi Desa Robusta', 
    owner: 'Pak Budi', 
    description: 'Kopi robusta asli petik merah yang diolah secara tradisional dengan cita rasa khas pegunungan yang sangat kuat.', 
    category: 'Minuman', 
    location: 'Dusun I, RT 02',
    image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '2', 
    name: 'Keripik Singkong Renyah', 
    owner: 'Ibu Siti', 
    description: 'Camilan keripik singkong dengan varian rasa original, pedas, dan balado. Tanpa pengawet dan MSG.', 
    category: 'Makanan', 
    location: 'Dusun III, RT 05',
    image: 'https://images.unsplash.com/photo-1623934199716-dc392bc8ba38?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '3', 
    name: 'Anyaman Bambu Kreatif', 
    owner: 'Kang Asep', 
    description: 'Produk kerajinan tangan dari bambu berupa tas, topi, dan perabotan rumah tangga ramah lingkungan.', 
    category: 'Kerajinan', 
    location: 'Dusun II, RT 01',
    image: 'https://images.unsplash.com/photo-1590641151475-6c7e39061595?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '4', 
    name: 'Madu Hutan Murni', 
    owner: 'Pak Dedi', 
    description: 'Madu murni dari hutan desa, diproses secara alami untuk menjaga khasiat dan kemurnian nutrisinya.', 
    category: 'Pertanian', 
    location: 'Dusun IV, RT 01',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '5', 
    name: 'Jasa Desain Grafis Desa', 
    owner: 'Rian Kurniawan', 
    description: 'Melayani pembuatan logo, brosur, dan banner untuk keperluan promosi digital usaha warga.', 
    category: 'Jasa', 
    location: 'Dusun I, RT 03',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: '6', 
    name: 'Beras Pandan Wangi', 
    owner: 'Poktan Maju', 
    description: 'Beras varietas pandan wangi asli hasil sawah desa, pulen, sehat, dan beraroma harum alami.', 
    category: 'Pertanian', 
    location: 'Dusun II, RT 04',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop' 
  },
];

const categories = ["Semua", "Makanan", "Minuman", "Kerajinan", "Pertanian", "Jasa"];

const Economy: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesCategory = activeCategory === "Semua" || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.owner.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-12">
        {/* Title Section */}
        <div className="text-center mb-20">
          <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-2xl mb-6">
            <Tag size={32} />
          </div>
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Ekonomi & UMKM Desa</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Dukung pertumbuhan ekonomi lokal dengan membeli produk-produk unggulan karya warga desa kami.
          </p>
        </div>

        {/* Filters & Search - Style Upgraded */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200 scale-105'
                    : 'bg-white text-slate-500 hover:bg-white hover:text-indigo-600 shadow-sm border border-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative max-w-md w-full">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari produk kebanggaan desa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-8 py-4 bg-white border border-slate-200 rounded-2xl text-sm outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-medium"
            />
          </div>
        </div>

        {/* Product Grid - Premium Look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 group">
              {/* Image Section */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 text-xs px-4 py-2 rounded-xl font-black shadow-lg uppercase tracking-widest">
                    {product.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <button className="bg-white text-slate-900 w-full py-3 rounded-xl font-black flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ShoppingBag size={18} /> Hubungi Penjual
                   </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10">
                <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{product.name}</h3>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm mb-4">
                   <div className="w-6 h-6 bg-indigo-50 rounded-full flex items-center justify-center">
                     <ShoppingBag size={12} />
                   </div>
                   {product.owner}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-tighter">
                    <MapPin className="w-4 h-4 mr-1.5 text-rose-500" />
                    {product.location}
                  </div>
                  <ArrowRight size={20} className="text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Dark Mode Enhanced */}
        <div className="mt-32 p-16 bg-slate-900 rounded-[3rem] text-white text-center relative overflow-hidden shadow-2xl shadow-indigo-900/20">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-black mb-6 tracking-tight">Promosikan Produk Anda Secara Digital</h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              Jangkau lebih banyak pembeli dan kembangkan usaha UMKM anda bersama platform DesaConnect. Pendaftaran 100% Gratis.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/30 flex items-center gap-2">
                Daftar Mitra Sekarang <ArrowRight size={20} />
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-2xl font-black hover:bg-white/20 transition-all">
                Pelajari Syarat & Ketentuan
              </button>
            </div>
          </div>
          {/* Visual Decorations */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Economy;
