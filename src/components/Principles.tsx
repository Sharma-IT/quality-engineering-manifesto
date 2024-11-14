import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface PrincipleCategory {
  title: string;
  principles: string[];
}

const principleCategories: PrincipleCategory[] = [
  {
    title: "Testing Strategy",
    principles: [
      'Exploratory testing over scripted-only testing',
      'Shift-left testing over late-stage quality checks',
      'Test design patterns over ad-hoc test cases',
      'API-level validation over UI-only testing',
      'Contract testing over end-to-end only',
      'Continuous testing over scheduled testing windows',
      'Cross-browser automation over single browser focus',
    ]
  },
  {
    title: "Team & Culture",
    principles: [
      'Fail as a team over Success as an individual',
      'Continuous Improvement over big bang changes',
      'Collaborative ownership over isolated responsibility',
      'Cross-functional skills over single-domain expertise',
      'Technical debt awareness over feature velocity',
    ]
  },
  {
    title: "Data & Metrics",
    principles: [
      'Data-driven decisions over intuition',
      'Quality metrics monitoring over pass/fail status',
      'Test data as code over manual test data management',
      'Documentation as code over static documentation',
    ]
  },
  {
    title: "Performance & Reliability",
    principles: [
      'Performance testing in a continuous manner over end-stage load tests',
      'Chaos engineering over stability assumptions',
      'Performance budgets over reactive optimisation',
      'Scalability over short-term solutions',
      'Service virtualisation over complete system dependencies',
    ]
  },
  {
    title: "Security & Accessibility",
    principles: [
      'Security by design over security by audit',
      'Security scanning in pipeline over periodic audits',
      'Accessibility testing integrated over compliance checkpoints',
    ]
  },
  {
    title: "Quality Process",
    principles: [
      'Quality gates automation over manual approvals',
      'Root cause analysis over symptom fixing',
      'Observability by design over reactive monitoring',
      'Quality-driven development over quality as afterthought',
      'Feedback loops over retrospective-only learnings',
      'Test environment parity over production-only validation',
    ]
  }
];

interface CategoryCardProps {
  category: PrincipleCategory;
  isOpen: boolean;
  onToggle: () => void;
}

function CategoryCard({ category, isOpen, onToggle }: CategoryCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {category.title}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 py-4 space-y-4 bg-gray-50 dark:bg-gray-800/50">
          {category.principles.map((principle, index) => (
            <div
              key={index}
              className="flex items-start space-x-3"
            >
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-sm font-medium">
                {index + 1}
              </span>
              <p className="text-gray-600 dark:text-gray-300">{principle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Principles() {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (title: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <section
      id="principles"
      className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Principles
        </h2>
        <div className="space-y-4">
          {principleCategories.map((category) => (
            <CategoryCard
              key={category.title}
              category={category}
              isOpen={openCategories[category.title] || false}
              onToggle={() => toggleCategory(category.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}