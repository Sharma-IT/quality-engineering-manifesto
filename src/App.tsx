import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CoreValues } from './components/CoreValues';
import { Principles } from './components/Principles';
import { Authors } from './components/Authors';
import { Footer } from './components/Footer';
import { PageButtons } from './components/PageButtons';
import { ViewSignatories } from './pages/ViewSignatories';
import { AboutAuthors } from './pages/AboutAuthors';
import { AboutManifesto } from './pages/AboutManifesto';
import { ThemeProvider } from './context/ThemeContext';

function HomePage({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <>
      <Hero />
      <CoreValues />
      <Principles />
      <Authors />
      <PageButtons
        onViewSignatories={() => onNavigate('/signatories')}
        onAboutAuthors={() => onNavigate('/about-authors')}
        onAboutManifesto={() => onNavigate('/about-manifesto')}
      />
    </>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          onNavigate={navigate}
        />
        <Routes>
          <Route path="/" element={<HomePage onNavigate={navigate} />} />
          <Route path="/signatories" element={<ViewSignatories />} />
          <Route path="/about-authors" element={<AboutAuthors />} />
          <Route path="/about-manifesto" element={<AboutManifesto />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;