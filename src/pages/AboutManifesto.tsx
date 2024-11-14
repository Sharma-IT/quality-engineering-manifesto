export function AboutManifesto() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
          About the Manifesto
        </h1>
        <div className="prose dark:prose-invert max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Our Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The Quality Engineering Manifesto represents a paradigm shift in how we 
              approach software quality. Born from the evolution of traditional testing 
              practices and the need for more holistic quality approaches in modern 
              software development, this manifesto aims to establish principles that 
              guide organisations toward better, more reliable software delivery.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Why This Matters
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              In today's rapidly evolving technology landscape, quality can't be an 
              afterthought. This manifesto emphasises prevention over detection, 
              automation over manual processes, and collaboration over siloed 
              responsibilities. These principles help organisations build quality into 
              their development process from the start.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              How to Contribute
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              This manifesto is a living document that grows with the community's 
              collective wisdom. We welcome contributions from quality engineers, 
              developers, and technology leaders who share our vision for better 
              software quality practices. Feel free to reach out to{' '}
              <a 
                href="https://www.linkedin.com/in/sharma-it" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 underline"
              >
                Shubham Sharma via LinkedIn
              </a>{' '}
              or{' '}
              <a 
                href="https://github.com/Sharma-IT/quality-engineering-manifesto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 underline"
              >
                create a pull request in the repository 
              </a> hosting the source code of this manifesto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}