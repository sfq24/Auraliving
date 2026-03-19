import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Testimonial } from './components/Testimonial';
import { OurHomes } from './components/OurHomes';
import { LifeAtAura } from './components/LifeAtAura';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Magnolia } from './pages/Magnolia';
import { Kent } from './pages/Kent';
import { Shoreline } from './pages/Shoreline';

function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Testimonial />
      <OurHomes />
      <LifeAtAura />
      <Services />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homes/magnolia" element={<Magnolia />} />
          <Route path="/homes/kent" element={<Kent />} />
          <Route path="/homes/shoreline" element={<Shoreline />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
