
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Calendar, Users, ArrowUpRight } from 'lucide-react';

const InfoWidgets: React.FC = () => {
  const widgets = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Layanan Mandiri',
      description: 'Urus surat menyurat desa secara online lebih cepat dan praktis dari mana saja.',
      link: '/layanan',
      color: 'indigo'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Agenda Desa',
      description: 'Pantau jadwal kegiatan rutin dan event besar di lingkungan desa kita.',
      link: '/berita',
      color: 'emerald'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Aspirasi Warga',
      description: 'Sampaikan saran dan keluhan anda langsung kepada pengurus desa.',
      link: '/aspirasi',
      color: 'amber'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative -mt-12 z-20">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {widgets.map((widget, idx) => (
            <Link 
              key={idx} 
              to={widget.link}
              className="flex flex-col items-start p-10 rounded-[2.5rem] bg-white hover:bg-indigo-600 shadow-xl shadow-slate-200/50 hover:shadow-indigo-200 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Decoration Circle */}
              <div className={`absolute -right-12 -top-12 w-48 h-48 rounded-full opacity-5 group-hover:opacity-10 transition-opacity ${
                widget.color === 'indigo' ? 'bg-indigo-600' : 
                widget.color === 'emerald' ? 'bg-emerald-600' : 'bg-amber-600'
              }`}></div>

              <div className={`mb-8 p-4 rounded-2xl shadow-lg transition-all duration-500 group-hover:bg-white group-hover:scale-110 ${
                widget.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' : 
                widget.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
              }`}>
                {widget.icon}
              </div>
              
              <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-white transition-colors">
                {widget.title}
              </h3>
              <p className="text-slate-500 group-hover:text-indigo-100 leading-relaxed font-medium transition-colors">
                {widget.description}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-sm font-black text-indigo-600 group-hover:text-white transition-all">
                Mulai Sekarang <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoWidgets;
