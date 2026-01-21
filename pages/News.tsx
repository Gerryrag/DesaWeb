
import React from 'react';
import NewsCard from '../components/NewsCard';
import { NewsItem } from '../types';

const allNews: NewsItem[] = [
  { id: '1', title: 'Pembangunan Jalan Desa Tahap 2 Dimulai Minggu Depan', excerpt: 'Pemerintah desa mengumumkan dimulainya perbaikan infrastruktur jalan...', date: '12 Okt 2023', category: 'Infrastruktur', image: 'https://picsum.photos/id/101/600/400' },
  { id: '2', title: 'Peluncuran Program Ketahanan Pangan Nabati', excerpt: 'Warga desa diajak berpartisipasi dalam pemanfaatan lahan pekarangan...', date: '08 Okt 2023', category: 'Perekonomian', image: 'https://picsum.photos/id/102/600/400' },
  { id: '3', title: 'Beasiswa Pendidikan untuk Anak Berprestasi Desa', excerpt: 'Pendaftaran beasiswa tingkat SMA dan Perguruan Tinggi resmi dibuka...', date: '05 Okt 2023', category: 'Pendidikan', image: 'https://picsum.photos/id/103/600/400' },
  { id: '4', title: 'Kegiatan Posyandu Serentak Bulan Oktober', excerpt: 'Cegah stunting, pemerintah desa kerahkan kader kesehatan ke seluruh dusun...', date: '02 Okt 2023', category: 'Kesehatan', image: 'https://picsum.photos/id/104/600/400' },
  { id: '5', title: 'Pelatihan Digital Marketing untuk UMKM Desa', excerpt: 'Meningkatkan daya saing produk lokal di kancah marketplace nasional...', date: '28 Sep 2023', category: 'UMKM', image: 'https://picsum.photos/id/106/600/400' },
  { id: '6', title: 'Lomba Kebersihan Antar Dusun Menyambut Hari Jadi', excerpt: 'Semangat gotong royong warga dalam mempercantik lingkungan desa...', date: '25 Sep 2023', category: 'Lingkungan', image: 'https://picsum.photos/id/107/600/400' },
];

const News: React.FC = () => {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-12">
        <h1 className="text-4xl font-bold mb-4">Berita & Pengumuman</h1>
        <p className="text-gray-500 mb-12">Warta harian seputar perkembangan dan agenda penting di DesaConnect.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allNews.map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
