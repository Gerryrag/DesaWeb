
import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Peta Lokasi Desa</h1>
        <p className="text-gray-500 mb-8">Temukan lokasi kantor desa dan batas-batas wilayah DesaConnect.</p>
        
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
          {/* Real Google Maps embed would go here. Using a placeholder iframe. */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.7139369527!2d106.7891!3d-6.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bfdfd0238d0!2sJakarta!5e0!3m2!1sen!2sid!4v1697123456789!5m2!1sen!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Batas Utara</h3>
            <p className="text-gray-600 text-sm">Berbatasan dengan Desa Sumber Makmur</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Batas Selatan</h3>
            <p className="text-gray-600 text-sm">Berbatasan dengan Hutan Lindung Jati</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Batas Timur/Barat</h3>
            <p className="text-gray-600 text-sm">Berbatasan dengan Sungai jernih dan Desa Maju Jaya</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
