
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const dataGender = [
  { name: 'Laki-laki', value: 2260 },
  { name: 'Perempuan', value: 2260 },
];

const dataAge = [
  { name: '0-14', value: 850 },
  { name: '15-24', value: 1100 },
  { name: '25-45', value: 1600 },
  { name: '46-65', value: 750 },
  { name: '65+', value: 220 },
];

const COLORS = ['#2563eb', '#ec4899', '#8b5cf6', '#10b981', '#f59e0b'];

const Demographics: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Data Demografis Desa</h1>
        <p className="text-gray-500 mb-12">Statistik kependudukan DesaConnect berdasarkan data terbaru tahun 2023.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Gender Chart */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-8 text-center">Komposisi Jenis Kelamin</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dataGender}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {dataGender.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 flex justify-around text-center">
              <div>
                <p className="text-gray-400 text-sm">Laki-laki</p>
                <p className="text-xl font-bold">50%</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Perempuan</p>
                <p className="text-xl font-bold">50%</p>
              </div>
            </div>
          </div>

          {/* Age Chart */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-8 text-center">Distribusi Usia</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataAge}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 overflow-x-auto">
          <h3 className="text-xl font-bold mb-6">Tabel Data Pekerjaan</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 text-gray-500 text-sm">
                <th className="pb-4 font-semibold">Jenis Pekerjaan</th>
                <th className="pb-4 font-semibold">Jumlah (Jiwa)</th>
                <th className="pb-4 font-semibold">Persentase (%)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-50">
                <td className="py-4">Petani / Pekebun</td>
                <td className="py-4 font-bold">1.250</td>
                <td className="py-4">27.6%</td>
              </tr>
              <tr className="border-b border-gray-50">
                <td className="py-4">Pedagang / Wiraswasta</td>
                <td className="py-4 font-bold">840</td>
                <td className="py-4">18.5%</td>
              </tr>
              <tr className="border-b border-gray-50">
                <td className="py-4">Karyawan Swasta</td>
                <td className="py-4 font-bold">620</td>
                <td className="py-4">13.7%</td>
              </tr>
              <tr className="border-b border-gray-50">
                <td className="py-4">PNS / TNI / POLRI</td>
                <td className="py-4 font-bold">120</td>
                <td className="py-4">2.6%</td>
              </tr>
              <tr>
                <td className="py-4">Lainnya / Pelajar / Tidak Bekerja</td>
                <td className="py-4 font-bold">1.690</td>
                <td className="py-4">37.3%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Demographics;
