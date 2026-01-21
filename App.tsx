
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/About/Profile';
import Demographics from './pages/About/Demographics';
import Structure from './pages/About/Structure';
import Map from './pages/About/Map';
import Services from './pages/Services';
import News from './pages/News';
import Blog from './pages/News/Blog';
import Announcements from './pages/News/Announcements';
import Reports from './pages/News/Reports';
import Transparency from './pages/Transparency';
import Economy from './pages/Economy';
import Aspirations from './pages/Aspirations';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang/profil" element={<Profile />} />
            <Route path="/tentang/demografis" element={<Demographics />} />
            <Route path="/tentang/struktur" element={<Structure />} />
            <Route path="/tentang/peta" element={<Map />} />
            <Route path="/layanan" element={<Services />} />
            <Route path="/berita" element={<News />} />
            <Route path="/berita/blog" element={<Blog />} />
            <Route path="/berita/pengumuman" element={<Announcements />} />
            <Route path="/berita/laporan" element={<Reports />} />
            <Route path="/transparansi" element={<Transparency />} />
            <Route path="/ekonomi" element={<Economy />} />
            <Route path="/aspirasi" element={<Aspirations />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
