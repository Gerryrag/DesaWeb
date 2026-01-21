
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1596431718995-bb0443efa23a?q=80&w=1920&auto=format&fit=crop',
    title: 'Membangun Desa, Menata Masa Depan',
    description: 'Pusat layanan digital terintegrasi untuk masyarakat DesaConnect yang lebih mandiri dan sejahtera.',
    cta: 'Lihat Layanan'
  },
  {
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop',
    title: 'Transparansi & Inovasi Tanpa Batas',
    description: 'Akses informasi publik dan berita terkini desa secara cepat, akurat, dan transparan.',
    cta: 'Berita Terbaru'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] overflow-hidden bg-slate-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Elegant Background with Ken Burns effect */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-linear ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-slate-900/40"></div>
          </div>

          {/* Simple & Elegant Content */}
          <div className="relative h-full container mx-auto px-6 md:px-12 flex items-center justify-center text-center">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-100/90 mb-10 max-w-2xl mx-auto font-medium animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                {slide.description}
              </p>
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-black transition-all shadow-2xl shadow-indigo-600/30 flex items-center gap-3 mx-auto group">
                  {slide.cta}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Elegant Dot Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 rounded-full h-1.5 ${
              index === currentSlide ? 'bg-white w-12' : 'bg-white/30 w-4 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
