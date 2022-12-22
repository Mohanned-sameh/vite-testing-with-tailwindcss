import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-teal-700 text-white text-xl" id="footer">
        <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
          <address>
            <h2>Acme Rocket-Powered Products, Inc.</h2>
            555 Astro Way
            <br />
            Fairfield, New Jersey 12345-5555
            <br />
            Email:{" "}
            <a href="mailto:Inquiries@acmerockets.com">
              Inquiries@acmerockets.com
            </a>
            <br />
            Phone: <a href="tel:+5555555555">(555) 555-5555</a>
          </address>
          <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact Us
            </a>
          </nav>
          <div className="flex flex-col sm:gap-2">
            <p className="text-right">
              CopyRight &copy; <span id="year">2022</span>
            </p>
            <p className="text-right">All Rights Reserved</p>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
