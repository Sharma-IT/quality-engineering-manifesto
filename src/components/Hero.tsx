export function Hero() {
  return (
    <header className="bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            The Agile Manifesto for
            <span className="block text-indigo-600 dark:text-indigo-400">
              Software Quality Engineering
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Through our work, we have discovered better ways of building usable,
            accessible, reliable, maintainable, secure, scalable and performant
            software by valuing:
          </p>
        </div>
      </div>
    </header>
  );
}