import { Users, Info, BookOpen } from 'lucide-react';

interface PageButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}

function PageButton({ icon, text, onClick }: PageButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

interface PageButtonsProps {
  onViewSignatories: () => void;
  onAboutAuthors: () => void;
  onAboutManifesto: () => void;
}

export function PageButtons({ onViewSignatories, onAboutAuthors, onAboutManifesto }: PageButtonsProps) {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PageButton
            icon={<Users className="w-5 h-5" />}
            text="View Signatories"
            onClick={onViewSignatories}
          />
          <PageButton
            icon={<Info className="w-5 h-5" />}
            text="About the Authors"
            onClick={onAboutAuthors}
          />
          <PageButton
            icon={<BookOpen className="w-5 h-5" />}
            text="About the Manifesto"
            onClick={onAboutManifesto}
          />
        </div>
      </div>
    </section>
  );
}