import { useState } from 'react';
import { SiGithub } from 'react-icons/si';
import { Linkedin, Mail, ChevronDown } from 'lucide-react';
import shubhamProfileImage from '../assets/images/shubham-sharma.png';

interface Author {
  name: string;
  role: string;
  bio: string;
  image: string;
  links: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const authors: Author[] = [
  {
    name: 'Shubham Sharma',
    role: 'Senior Software Quality Engineer',
    bio: 'Passionate about evolving software quality practices and building usable and reliable systems.',
    image: shubhamProfileImage,
    links: {
      github: 'https://github.com/Sharma-IT',
      linkedin: 'https://www.linkedin.com/in/sharma-it',
      email: 'mailto:shubhamsharma.emails@gmail.com'
    }
  }
];

interface AuthorCardProps {
  author: Author;
  isOpen: boolean;
  onToggle: () => void;
}

function AuthorCard({ author, isOpen, onToggle }: AuthorCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center space-x-4"
      >
        <img
          src={author.image}
          alt={author.name}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-indigo-500 dark:ring-indigo-400"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {author.name}
          </h3>
          <p className="text-sm text-indigo-600 dark:text-indigo-400">
            {author.role}
          </p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 pb-6 space-y-4 bg-gray-50 dark:bg-gray-800/50">
          <p className="text-gray-600 dark:text-gray-300 pt-4 border-t border-gray-200 dark:border-gray-700">
            {author.bio}
          </p>
          <div className="flex space-x-4">
            {author.links.github && (
              <a
                href={author.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <SiGithub className="w-5 h-5" />
              </a>
            )}
            {author.links.linkedin && (
              <a
                href={author.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {author.links.email && (
              <a
                href={author.links.email}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Authors() {
  const [openAuthors, setOpenAuthors] = useState<Record<string, boolean>>({});

  const toggleAuthor = (name: string) => {
    setOpenAuthors(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <section id="authors" className="py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Authors
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {authors.map((author) => (
            <AuthorCard
              key={author.name}
              author={author}
              isOpen={openAuthors[author.name] || false}
              onToggle={() => toggleAuthor(author.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}