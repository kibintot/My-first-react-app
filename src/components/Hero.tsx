function Hero() {
  return (
    <section id="home" className="max-w-4xl mx-auto px-6 py-20 text-center">
      <div className="inline-block bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
        Web Development Student
      </div>

      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
        Hello, I'm Kevin
      </h1>

      <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
        I am currently learning React and building simple, responsive web applications while improving my front-end coding skills.
      </p>

      <div className="mt-8">
        <a
          href="#projects"
          className="inline-block bg-indigo-600 text-white font-semibold text-sm px-7 py-3 rounded-md hover:bg-indigo-500 transition-colors"
        >
          Check My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;