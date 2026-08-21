import { useState } from "react";

const contactItems = [
  {
    label: "Email",
    value: "kevin@example.com",
    href: "mailto:kevin@example.com",
  },
  {
    label: "GitHub",
    value: "github.com/kevin",
    href: "https://github.com/",
  },
  {
    label: "Facebook",
    value: "facebook.com/kevin",
    href: "https://www.facebook.com/",
  },
];

function Contact() {
  // React State
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Form Event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !message) {
      alert("Please enter your name and message.");
      return;
    }

    alert(`Thanks, ${name}! Your message has been sent. 😊`);

    setName("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            Let's connect.
          </h2>

          <p className="mt-4 text-slate-400 leading-relaxed">
            Have a project, an idea, or just want to say hello?
            Feel free to send me a message.
          </p>
        </div>

        {/* Contact Links */}
        <div className="mt-8 flex flex-wrap gap-6 border-y border-slate-800 py-6">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <p className="text-xs uppercase tracking-wider text-slate-500">
                {item.label}
              </p>

              <p className="mt-1 text-slate-300 group-hover:text-indigo-400 transition-colors">
                {item.value}
              </p>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-2xl"
        >
          {/* Name */}
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              Your name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Kevin"
              className="w-full bg-transparent border-b border-slate-700
              px-0 py-3 text-white placeholder-slate-600
              outline-none focus:border-indigo-400
              transition-colors"
            />
          </div>

          {/* Message */}
          <div className="mt-7">
            <label className="block text-sm text-slate-400 mb-2">
              Message
            </label>

            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              className="w-full bg-transparent border-b border-slate-700
              px-0 py-3 text-white placeholder-slate-600
              outline-none resize-none focus:border-indigo-400
              transition-colors"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-7 px-7 py-3 rounded-full
            bg-indigo-600 text-white text-sm font-semibold
            hover:bg-indigo-500 hover:-translate-y-0.5
            transition-all duration-300"
          >
            Send Message →
          </button>
        </form>

        {/* Footer */}
        <div className="mt-16 pt-6 border-t border-slate-800">
          <p className="text-sm text-slate-600">
            © 2026 Kevin · Built with React
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;