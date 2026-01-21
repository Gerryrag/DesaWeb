
import React from 'react';
import { Mail, Phone, Clock, Instagram, Facebook, Youtube, MapPin, ShieldCheck, Zap, Globe, Award } from 'lucide-react';

const Footer: React.FC = () => {
  const sponsors = [
    { name: 'Bank Indonesia', icon: <Award size={20} /> },
    { name: 'Kemenkominfo', icon: <Globe size={20} /> },
    { name: 'PLN Persero', icon: <Zap size={20} /> },
    { name: 'Kementerian Desa', icon: <ShieldCheck size={20} /> },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <h2 className="text-2xl font-black text-white tracking-tighter">
              Desa<span className="text-indigo-500">Connect</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              Transformasi digital untuk pelayanan desa yang lebih transparan, akuntabel, dan efisien. Mewujudkan desa cerdas masa depan.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-slate-800/50 text-white rounded-2xl hover:bg-indigo-600 hover:-translate-y-1 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-black mb-8 text-sm uppercase tracking-[0.2em]">Tautan Cepat</h3>
            <ul className="space-y-4 text-sm font-semibold">
              <li><a href="#/layanan" className="hover:text-indigo-400 transition-colors">Layanan Online</a></li>
              <li><a href="#/berita/blog" className="hover:text-indigo-400 transition-colors">Berita Desa</a></li>
              <li><a href="#/transparansi" className="hover:text-indigo-400 transition-colors">Transparansi Dana</a></li>
              <li><a href="#/ekonomi" className="hover:text-indigo-400 transition-colors">Produk UMKM</a></li>
              <li><a href="#/aspirasi" className="hover:text-indigo-400 transition-colors">Aspirasi Warga</a></li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white font-black mb-8 text-sm uppercase tracking-[0.2em]">Jam Pelayanan</h3>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="font-bold text-slate-200">Senin - Kamis</p>
                  <p className="text-xs mt-0.5">08.00 - 15.30 WIB</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="font-bold text-slate-200">Jumat</p>
                  <p className="text-xs mt-0.5">08.00 - 14.30 WIB</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-black mb-8 text-sm uppercase tracking-[0.2em]">Hubungi Kami</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
                <span className="leading-relaxed">Jl. Raya Desa No. 123, Kabupaten Sejahtera, Indonesia 12345</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>(021) 1234 5678</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>info@desaconnect.go.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sponsor & Mitra Section */}
        <div className="pt-12 pb-16 border-y border-slate-800">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-10">Didukung Oleh & Bekerjasama Dengan</span>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              {sponsors.map((sponsor, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-default">
                  <div className="text-white group-hover:text-indigo-500 transition-colors">
                    {sponsor.icon}
                  </div>
                  <span className="text-lg font-black text-white tracking-tighter group-hover:text-white transition-colors">
                    {sponsor.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center text-[10px] font-bold uppercase tracking-widest text-slate-600">
          <p>&copy; {new Date().getFullYear()} Pemerintah Desa DesaConnect. Transformasi Digital Menuju Desa Mandiri.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
