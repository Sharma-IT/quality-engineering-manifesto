import { SiGithub } from 'react-icons/si';
import { BackToTop } from './BackToTop';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <a
            href="https://github.com/Sharma-IT/quality-engineering-manifesto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            <SiGithub className="w-5 h-5 mr-2" />
            Contribute to this manifesto on GitHub
          </a>
          <p className="text-center text-base text-gray-500 dark:text-gray-400 pb-12 sm:pb-0">
            © {new Date().getFullYear()}, Shubham Sharma. Quality Engineering
            Manifesto. All rights reserved.
          </p>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}