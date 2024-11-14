import { ThemeToggle } from './ThemeToggle';
import { SiGithub } from 'react-icons/si';
import { Users, BookOpen, UserCircle, Home } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  onNavigate: (path: string) => void;
}

export function Navigation({ isMenuOpen, setIsMenuOpen, onNavigate }: NavigationProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick('/')}
              className="flex items-center space-x-2 text-xl font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Home className="w-6 h-6" />
              <span>Quality Engineering Manifesto</span>
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
                href="https://github.com/quality-engineering-manifesto/quality-engineering-manifesto.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link inline-flex items-center space-x-1"
              >
                <SiGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <ThemeToggle />
            </div>
          </div>
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <button
              onClick={() => handleNavClick('/')}
              className={`mobile-nav-link ${currentPath === '/' ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300' : ''}`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button
              onClick={() => handleNavClick('/signatories')}
              className={`mobile-nav-link ${currentPath === '/signatories' ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300' : ''}`}
            >
              <Users className="w-4 h-4" />
              <span>Signatories</span>
            </button>
            <button
              onClick={() => handleNavClick('/about-authors')}
              className={`mobile-nav-link ${currentPath === '/about-authors' ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300' : ''}`}
            >
              <UserCircle className="w-4 h-4" />
              <span>Authors</span>
            </button>
            <button
              onClick={() => handleNavClick('/about-manifesto')}
              className={`mobile-nav-link ${currentPath === '/about-manifesto' ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300' : ''}`}
            >
              <BookOpen className="w-4 h-4" />
              <span>About</span>
            </button>
            <a
              href="https://github.com/quality-engineering-manifesto/quality-engineering-manifesto.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-nav-link"
            >
              <SiGithub className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <div className="px-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}