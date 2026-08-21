import heroImg from "@/assets/kevinPic.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-6 py-16 md:py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Left Side */}
        <div>
          <span className="inline-block bg-indigo-50 border border-indigo-100
            text-indigo-700 text-xs font-semibold px-4 py-1.5 rounded-full">
            Web Development Student
          </span>

          <h1 className="mt-5 text-5xl md:text-6xl font-extrabold
            text-gray-900 tracking-tight leading-tight"
          >
            Hello, I'm
            <span className="block text-indigo-600">
              Khevin.
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-base sm:text-lg
            max-w-lg leading-relaxed"
          >
            I am currently learning React and building simple,
            responsive web applications while improving my
            front-end coding skills.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-block bg-indigo-600 text-white
                font-semibold text-sm px-7 py-3 rounded-full
                hover:bg-indigo-500 hover:-translate-y-0.5
                transition-all duration-300"
            >
              Check My Work →
            </a>

            <a
              href="#contact"
              className="inline-block border border-gray-200
                text-gray-700 font-semibold text-sm px-7 py-3
                rounded-full hover:border-indigo-400
                hover:text-indigo-600 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side - Picture */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">

            {/* Background Shape */}
            <div className="absolute inset-0 bg-indigo-100
              rounded-[2rem] rotate-3"
            />

            {/* Picture Container */}
            <div className="relative bg-slate-50 border border-gray-200
              rounded-[2rem] p-4"
            >
              <img
                src={heroImg}
                alt="Kevin"
                className="w-[280px] sm:w-[330px] md:w-[360px]
                  lg:w-[400px] max-h-[450px]
                  object-contain rounded-2xl"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;