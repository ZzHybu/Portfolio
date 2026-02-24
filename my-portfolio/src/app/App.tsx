import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedSection } from './components/FeaturedSection';
import { Projects } from './components/Projects';
import { About } from './components/About'; // New
import { Skills } from './components/Skills'; // New
import { Contact } from './components/Contact'; // New
import { Footer } from './components/Footer'; // New
import { ProjectDetail } from './pages/ProjectDetail';

function App() {
  return (
    <> 
      <Navbar />
      <main>
        <Routes>
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
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;