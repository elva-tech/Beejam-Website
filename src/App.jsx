import Navbar from './components/Navbar';
import SmoothScroll from './components/SmoothScroll';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Philosophy from './pages/Philosophy';
import FarmSystem from './pages/FarmSystem';
import Families from './pages/Families';
import Farmers from './pages/Farmers';
import Landowners from './pages/Landowners';
import Transparency from './pages/Transparency';
import Knowledge from './pages/Knowledge';
import KnowledgeArticle from './pages/KnowlegdeArticle';
import Journal from './pages/Journal';
import Contact from './pages/Contact';
import Foundations from './sections/Foundations';
import FoundationArticle from './sections/FoundationArticle';

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-beejam-beige">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/farm-system" element={<FarmSystem />} />
          <Route path="/for-families" element={<Families />} />
          <Route path="/for-farmers" element={<Farmers />} />
          <Route path="/for-landowners" element={<Landowners />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/knowledge/:slug" element={<KnowledgeArticle />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/foundations" element={<Foundations />} />
          <Route path="/foundations/:slug" element={<FoundationArticle />} />


        </Routes>
      </div>
    </SmoothScroll>
  );
}
