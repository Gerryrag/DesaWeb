
import React from 'react';
import { Target, CheckCircle } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-12 max-w-4xl">
        {/* Profile Section */}
        <div className="mb-20">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Profil DesaConnect</h1>
          <img 
            src="https://picsum.photos/id/10/1200/600" 
            alt="Desa" 
            className="w-full h-80 object-cover rounded-2xl mb-10 shadow-lg"
          />
          <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              DesaConnect adalah sebuah desa yang terletak di jantung Kabupaten Sejahtera yang asri. Dengan luas wilayah mencapai 450 hektar, desa kami memiliki kekayaan alam yang melimpah dan potensi sumber daya manusia yang unggul.
            </p>
            <p>
              Secara administratif, DesaConnect terdiri dari 4 Dusun, 8 RW, dan 24 RT. Mayoritas penduduk kami bermata pencaharian sebagai petani, pedagang, dan pengrajin UMKM yang menjadi tulang punggung ekonomi desa.
            </p>
            <p>
              Sejak tahun 2020, kami berkomitmen untuk melakukan transformasi digital melalui inisiatif "Desa Cerdas", di mana pelayanan publik dan transparansi anggaran menjadi prioritas utama untuk memudahkan warga dalam berinteraksi dengan pemerintah desa.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi & Misi Desa</h2>
            <p className="text-gray-500">Arah pembangunan DesaConnect untuk periode 2021-2027.</p>
          </div>

          {/* Visi Section */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-blue-100 rounded-2xl">
                <Target className="w-10 h-10 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-6 text-gray-900 uppercase tracking-widest">Visi</h3>
            <div className="bg-blue-600 text-white p-10 rounded-3xl shadow-xl text-center">
              <p className="text-2xl md:text-3xl font-light italic leading-relaxed">
                "Mewujudkan DesaConnect sebagai Desa Digital yang Mandiri, Sejahtera, dan Berakhlak Mulia melalui Inovasi Layanan Terpadu."
              </p>
            </div>
          </div>

          {/* Misi Section */}
          <div>
            <h3 className="text-xl font-bold text-center mb-10 text-gray-900 uppercase tracking-widest">Misi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Meningkatkan kualitas pelayanan publik melalui sistem digitalisasi terpadu.",
                "Mengoptimalkan potensi ekonomi lokal dan pemberdayaan UMKM berbasis teknologi.",
                "Membangun infrastruktur desa yang merata, berkelanjutan, dan ramah lingkungan.",
                "Menciptakan tata kelola pemerintahan desa yang transparan, bersih, dan akuntabel.",
                "Meningkatkan sumber daya manusia melalui program pendidikan dan kesehatan gratis.",
                "Menjaga kerukunan dan nilai-nilai luhur budaya desa dalam kehidupan bermasyarakat."
              ].map((misi, idx) => (
                <div key={idx} className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed font-medium">{misi}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
