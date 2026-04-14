import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedSection } from './components/FeaturedSection';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetail } from './pages/ProjectDetail';
import { Imprint } from './Imprint';
import { PrivacyPolicy } from './PrivacyPolicy';

function App() {
  return (
    <> 
      <Navbar />
      <main>
        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={
            <>
              <Hero />
              <FeaturedSection />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </>
          } />

          {/* Dedicated Routes for Sub-pages */}
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;