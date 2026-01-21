
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Landmark } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Tentang Desa', 
      path: '#',
      id: 'tentang',
      dropdown: [
        { name: 'Profil Desa', path: '/tentang/profil' },
        { name: 'Data Demografis', path: '/tentang/demografis' },
        { name: 'Struktur Organisasi', path: '/tentang/struktur' },
        { name: 'Peta Lokasi', path: '/tentang/peta' },
      ]
    },
    { name: 'Layanan Publik', path: '/layanan' },
    { 
      name: 'Berita', 
      path: '#',
      id: 'berita',
      dropdown: [
        { name: 'Blog & Artikel', path: '/berita/blog' },
        { name: 'Pengumuman Resmi', path: '/berita/pengumuman' },
        { name: 'Laporan Kegiatan', path: '/berita/laporan' },
      ]
    },
    { name: 'Transparansi', path: '/transparansi' },
    { name: 'Ekonomi & UMKM', path: '/ekonomi' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-indigo-50">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-indigo-600 p-2 rounded-xl text-white group-hover:rotate-12 transition-transform duration-300">
              <Landmark size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              Desa<span className="text-indigo-600">Connect</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.id || null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <div className={`flex items-center cursor-pointer px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${activeDropdown === item.id ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:text-indigo-600'}`}>
                    {item.name} <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                    {activeDropdown === item.id && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-indigo-50 shadow-2xl shadow-indigo-100/50 rounded-2xl py-3 animate-in fade-in zoom-in-95 duration-200">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-5 py-2.5 text-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors font-semibold"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="px-4 py-2 rounded-xl text-slate-600 hover:text-indigo-600 font-semibold transition-all hover:bg-indigo-50"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2.5 text-slate-900 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-indigo-50 absolute w-full shadow-2xl h-screen overflow-y-auto z-[60]">
          <div className="flex flex-col p-6 space-y-8">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="space-y-4">
                    <span className="text-xs font-black text-indigo-300 uppercase tracking-widest">{item.name}</span>
                    <div className="pl-4 flex flex-col space-y-4 border-l-2 border-indigo-100">
                      {item.dropdown.map((sub) => (
                        <Link 
                          key={sub.name} 
                          to={sub.path} 
                          className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-2xl font-black text-slate-900 hover:text-indigo-600 transition-colors block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
