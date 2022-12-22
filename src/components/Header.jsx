import React from "react";

export default function Header() {
  const toggleMenu = () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
    document.getElementById("mobile-menu").classList.toggle("flex");
    document.getElementById("hamburger-button").classList.toggle("toggle-btn");
  };

  return (
    <>
      <header className="bg-teal-700 text-white sticky top-0 z-10">
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-medium">
            <a href="#hero">🚀 Acme Rockets</a>
          </h1>
          <button
            id="hamburger-button"
            onClick={toggleMenu}
            className="text-3xl md:hidden cursor-pointer relative w-8 h-8"
          >
            <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3"></div>
            {/* &#9776; */}
          </button>
          <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact
            </a>
          </nav>
        </section>
        <section
          id="mobile-menu"
          onClick={toggleMenu}
          className="absolute top-68 w-full text-5xl flex-col justify-content-center origin-top animate-open-menu bg-black hidden"
        >
          <button className="text-8xl self-end px-6">{/* &times; */}</button>
          <nav
            className="flex flex-col min-h-screen items-center py-8"
            aria-label="mobile"
          >
            <a
              href="#hero"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Home
            </a>
            <a
              href="#rockets"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Rockets
            </a>
            <a
              href="#testimonials"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Contact Us
            </a>
            <a
              href="#footer"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Legal
            </a>
          </nav>
        </section>
      </header>
    </>
  );
}
