
import React from 'react';

const staff = [
  { name: 'Dr. Ahmad Sujadi', role: 'Kepala Desa', image: 'https://picsum.photos/id/64/300/300' },
  { name: 'Siti Aminah, S.Sos', role: 'Sekretaris Desa', image: 'https://picsum.photos/id/65/300/300' },
  { name: 'Bambang Irawan', role: 'Kaur Keuangan', image: 'https://picsum.photos/id/66/300/300' },
  { name: 'Dewi Lestari', role: 'Kaur Perencanaan', image: 'https://picsum.photos/id/67/300/300' },
  { name: 'Joko Widodo (Staf)', role: 'Kasi Pelayanan', image: 'https://picsum.photos/id/68/300/300' },
  { name: 'Rina Kusuma', role: 'Kasi Kesejahteraan', image: 'https://picsum.photos/id/69/300/300' },
];

const Structure: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Struktur Organisasi</h1>
          <p className="text-gray-500">Susunan pengurus Pemerintah Desa DesaConnect periode berjalan.</p>
        </div>

        {/* Tree Layout simulation */}
        <div className="flex flex-col items-center">
          {/* Top: Kepala Desa */}
          <div className="mb-16 relative flex flex-col items-center">
            <div className="bg-blue-50 border-2 border-blue-600 p-2 rounded-2xl">
              <img src={staff[0].image} alt={staff[0].name} className="w-40 h-40 rounded-xl object-cover" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-bold text-xl">{staff[0].name}</h3>
              <p className="text-blue-600 font-semibold">{staff[0].role}</p>
            </div>
            <div className="absolute top-full h-12 w-1 bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {staff.slice(1).map((person, idx) => (
              <div key={idx} className="flex flex-col items-center bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-white" />
                <h4 className="font-bold text-gray-900 text-center">{person.name}</h4>
                <p className="text-sm text-gray-500">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
