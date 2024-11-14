import { Authors } from '../components/Authors';

export function AboutAuthors() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
          About the Authors
        </h1>
        <div className="prose dark:prose-invert max-w-none mb-16">
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the passionate individuals behind the Quality Engineering Manifesto. 
            Each author brings unique insights and experiences from their journey in 
            software quality engineering.
          </p>
        </div>
        <Authors />
      </div>
    </div>
  );
}