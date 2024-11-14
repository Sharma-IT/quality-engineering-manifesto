import { ThemeToggle } from './ThemeToggle';
import { SiGithub } from 'react-icons/si';
import { Users, BookOpen, UserCircle, Home } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  onNavigate: (path: string) => void;
}

export function Navigation({ isMenuOpen, setIsMenuOpen, onNavigate }: NavigationProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setShouldRender(true);
      // Delay setting isAnimating to allow initial render with opacity-0
      setTimeout(() => {
        setIsAnimating(true);
      }, 50);
    } else {
      setIsAnimating(false);
      // Wait for fade-out transition to complete before removing from DOM
      const timer = setTimeout(() => setShouldRender(false), 700);
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm transition-colors duration-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick('/')}
              className="flex items-center space-x-2 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Home className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="truncate">Quality Engineering Manifesto</span>
            </button>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleNavClick('/signatories')}
                className={`nav-link inline-flex items-center space-x-1 ${
                  currentPath === '/signatories' ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300' : ''
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Signatories</span>
              </button>
              <button
                onClick={() => handleNavClick('/about-authors')}
                className={`nav-link inline-flex items-center space-x-1 ${
                  currentPath === '/about-authors' ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300' : ''
                }`}
              >
                <UserCircle className="w-4 h-4" />
                <span>Authors</span>
              </button>
              <button
                onClick={() => handleNavClick('/about-manifesto')}
                className={`nav-link inline-flex items-center space-x-1 ${
                  currentPath === '/about-manifesto' ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300' : ''
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>About</span>
              </button>
              <a
                href="https://github.com/Sharma-IT/quality-engineering-manifesto"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link inline-flex items-center space-x-1"
              >
                <SiGithub className="w-4 h-4" />
                <span>Contribute</span>
              </a>
              <ThemeToggle />
            </div>
          </div>
          <div className="flex sm:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
            >
              <span className="sr-only">Toggle menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu backdrop and panel */}
      {shouldRender && (
        <>
          <div 
            className={`fixed inset-0 bg-gray-600 bg-opacity-50 dark:bg-opacity-70 transition-opacity duration-700 ease-in-out ${
              isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          
          <div 
            className={`fixed inset-y-0 right-0 w-full max-w-[280px] bg-white dark:bg-gray-900 shadow-xl z-50 rounded-l-2xl ${
              isMenuOpen ? 'animate-slide-in' : 'transition-transform duration-700 ease-in-out transform translate-x-full'
            }`}
            aria-label="Mobile menu"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
                >
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className={`flex-1 overflow-y-auto py-2 transition-opacity duration-700 opacity-0 ${
                isAnimating ? 'opacity-100' : ''
              }`}>
                <button
                  onClick={() => handleNavClick('/')}
                  className={`w-full flex items-center space-x-3 px-4 py-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                    currentPath === '/' ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300' : ''
                  }`}
                >
                  <Home className="w-5 h-5" />
                  <span>Home</span>
                </button>
                <button
                  onClick={() => handleNavClick('/signatories')}
                  className={`w-full flex items-center space-x-3 px-4 py-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                    currentPath === '/signatories' ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300' : ''
                  }`}
                >
                  <Users className="w-5 h-5" />
                  <span>Signatories</span>
                </button>
                <button
                  onClick={() => handleNavClick('/about-authors')}
                  className={`w-full flex items-center space-x-3 px-4 py-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                    currentPath === '/about-authors' ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300' : ''
                  }`}
                >
                  <UserCircle className="w-5 h-5" />
                  <span>Authors</span>
                </button>
                <button
                  onClick={() => handleNavClick('/about-manifesto')}
                  className={`w-full flex items-center space-x-3 px-4 py-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                    currentPath === '/about-manifesto' ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300' : ''
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  <span>About</span>
                </button>
                <a
                  href="https://github.com/Sharma-IT/quality-engineering-manifesto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center space-x-3 px-4 py-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <SiGithub className="w-5 h-5" />
                  <span>Contribute</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}