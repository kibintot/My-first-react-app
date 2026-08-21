function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
        >
          Kevin<span className="text-indigo-400">.</span>
        </a>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="px-4 py-2 rounded-full text-sm font-medium
            text-slate-300 hover:bg-slate-800
            hover:text-indigo-400 transition-all duration-300"
          >
            Contact
          </a>

          <a
            href="#projects"
            className="px-4 py-2 rounded-full text-sm font-medium
            text-slate-300 hover:bg-slate-800
            hover:text-indigo-400 transition-all duration-300"
          >
            Projects
          </a>

          <a
            href="#home"
            className="ml-2 px-5 py-2.5 rounded-full
            bg-indigo-500 text-white text-sm font-semibold
            hover:bg-indigo-400 hover:-translate-y-0.5
            transition-all duration-300"
          >
            Home
          </a>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;