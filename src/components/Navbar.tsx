function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">
          Kevin<span className="text-indigo-400">.</span>
        </h1>

        <ul className="flex gap-6 text-sm font-medium text-slate-300">
          <li>
            <a href="#home" className="hover:text-indigo-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;