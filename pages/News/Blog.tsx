
import React, { useState, useMemo } from 'react';
import NewsCard from '../../components/NewsCard';
import { Search } from 'lucide-react';
import { NewsItem } from '../../types';

const allBlogItems: NewsItem[] = [
  { id: '1', title: 'Pembangunan Jalan Desa Tahap 2 Dimulai Minggu Depan', excerpt: 'Pemerintah desa mengumumkan dimulainya perbaikan infrastruktur jalan sepanjang 2km...', date: '12 Okt 2023', category: 'Infrastruktur', image: 'https://picsum.photos/id/101/600/400' },
  { id: '2', title: 'Peluncuran Program Ketahanan Pangan Nabati', excerpt: 'Warga desa diajak berpartisipasi dalam pemanfaatan lahan pekarangan untuk ditanami sayuran...', date: '08 Okt 2023', category: 'Perekonomian', image: 'https://picsum.photos/id/102/600/400' },
  { id: '3', title: 'Beasiswa Pendidikan untuk Anak Berprestasi Desa', excerpt: 'Pendaftaran beasiswa tingkat SMA dan Perguruan Tinggi resmi dibuka bagi putra-putri terbaik...', date: '05 Okt 2023', category: 'Pendidikan', image: 'https://picsum.photos/id/103/600/400' },
  { id: '4', title: 'Kegiatan Posyandu Serentak Bulan Oktober', excerpt: 'Cegah stunting, pemerintah desa kerahkan kader kesehatan ke seluruh dusun untuk pelayanan kesehatan...', date: '02 Okt 2023', category: 'Kesehatan', image: 'https://picsum.photos/id/104/600/400' },
  { id: '5', title: 'Pelatihan Digital Marketing untuk UMKM Desa', excerpt: 'Meningkatkan daya saing produk lokal di kancah marketplace nasional melalui strategi konten digital...', date: '28 Sep 2023', category: 'UMKM', image: 'https://picsum.photos/id/106/600/400' },
  { id: '6', title: 'Lomba Kebersihan Antar Dusun Menyambut Hari Jadi', excerpt: 'Semangat gotong royong warga dalam mempercantik lingkungan desa melalui lomba kebersihan...', date: '25 Sep 2023', category: 'Lingkungan', image: 'https://picsum.photos/id/107/600/400' },
];

const categories = ["Semua", "Infrastruktur", "Perekonomian", "Pendidikan", "Kesehatan", "UMKM", "Lingkungan"];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = useMemo(() => {
    return allBlogItems.filter(item => {
      const matchesCategory = activeCategory === "Semua" || item.category === activeCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Artikel Desa</h1>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Kumpulan artikel, berita, dan inspirasi seputar kegiatan warga dan pembangunan di DesaConnect.
          </p>
        </div>

        {/* Filters & Search (Style matches UMKM reference) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari artikel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3 bg-white border border-gray-200 rounded-full text-sm outline-none focus:ring-2 focus:ring-black/5 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400 italic">Artikel tidak ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
