import { ScrollText, Shield, Lightbulb, Sparkles } from 'lucide-react';

const coreValues = [
  {
    emphasis: 'Prevention',
    over: 'Goalkeeping',
    icon: (
      <Shield className="w-6 h-6 mb-4 text-indigo-600 dark:text-indigo-400" />
    ),
  },
  {
    emphasis: 'Context-driven Coverage',
    over: 'Systematic Coverage',
    icon: (
      <Sparkles className="w-6 h-6 mb-4 text-indigo-600 dark:text-indigo-400" />
    ),
  },
  {
    emphasis: 'Testing Expertise',
    over: 'Exhaustive Scripts',
    icon: (
      <Lightbulb className="w-6 h-6 mb-4 text-indigo-600 dark:text-indigo-400" />
    ),
  },
  {
    emphasis: 'Automation',
    over: 'Manual',
    icon: (
      <ScrollText className="w-6 h-6 mb-4 text-indigo-600 dark:text-indigo-400" />
    ),
  },
];

interface ValueCardProps {
  emphasis: string;
  over: string;
  icon: React.ReactNode;
}

function ValueCard({ emphasis, over, icon }: ValueCardProps) {
  return (
    <div className="relative group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl transform-gpu hover:-translate-y-1 hover:translate-x-0.5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
      {icon}
      <div className="mt-8">
        <h2 className="text-lg font-medium">
          <span className="absolute inset-0" aria-hidden="true" />
          <span className="text-gray-900 dark:text-white">{emphasis}</span>
          <span className="block text-sm text-gray-500 dark:text-gray-400 mt-2">
            over
          </span>
          <span className="block text-gray-600 dark:text-gray-300">{over}</span>
        </h2>
      </div>
    </div>
  );
}

export function CoreValues() {
  return (
    <section
      id="values"
      className="py-4 bg-white dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
        <p className="text-center mt-8 text-gray-600 dark:text-gray-400 text-lg italic">
          That is, while there is value in the items on the right, we value the
          items on the left more.
        </p>
      </div>
    </section>
  );
}