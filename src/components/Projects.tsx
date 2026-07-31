function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Project 1 */}
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-lg font-bold text-gray-900">Portfolio Website</h3>
          <p className="text-sm text-gray-600 mt-2">
            A simple personal portfolio created with React and Tailwind CSS.
          </p>
          <a
            href="https://portfolio.adobe.com/"
            className="inline-block mt-4 text-xs font-bold text-indigo-600 hover:underline"
          >
            View Project →
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-lg font-bold text-gray-900">Calculator App</h3>
          <p className="text-sm text-gray-600 mt-2">
            A basic web calculator built with JavaScript to practice state handling.
          </p>
          <a
            href="https://www.calculator.net/"
            className="inline-block mt-4 text-xs font-bold text-indigo-600 hover:underline"
          >
            View Project →
          </a>
        </div>

        {/* Project 3 */}
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-lg font-bold text-gray-900">Movie Search Tool</h3>
          <p className="text-sm text-gray-600 mt-2">
            A mini web app that fetches movie information using a public API.
          </p>
          <a
            href="https://whatismymovie.com/"
            className="inline-block mt-4 text-xs font-bold text-indigo-600 hover:underline"
          >
            View Project →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;