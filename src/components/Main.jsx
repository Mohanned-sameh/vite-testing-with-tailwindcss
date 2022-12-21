import React from "react";
import rocketdab from "../img/rocketdab.png";
import rocketman from "../img/rocketman.png";
import rocketride from "../img/rocketride.png";
import rocketlaunch from "../img/rocketlaunch.png";
function Main() {
  return (
    <>
      <main className="max-w-4xl mx-auto">
        <section
          className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40"
          id="hero"
        >
          <article className="sm:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
              We Boldy Go{" "}
              <span className="text-indigo-700 dark:text-indigo 300">
                Where No Rocket
              </span>{" "}
              Has Gone Before...
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
              We're building rockets for the next century today. From the moon
              to Mars, Jupiter and beyond...
            </p>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
              Think Acme Rockets.
            </p>
          </article>
          <img src={rocketdab} alt="Rocket Dab" className="w-1/2" />
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <section className="p-6 my-12 scroll-mt-20" id="rockets">
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Our Rockets
          </h2>
          <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <li className=" w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl dark:bg-black">
              <img src={rocketman} className="w-1/2 mb-6" alt="Explorer" />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                Explorer
              </h3>
              <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-skate-400 ">
                $
              </p>
              <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-skate-400">
                Affordable Exploration
              </p>
            </li>
            <li className=" w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl dark:bg-black">
              <img src={rocketride} className="w-1/2 mb-6" alt="Explorer" />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                Adventurer
              </h3>
              <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-skate-400 ">
                $$
              </p>
              <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-skate-400">
                Best Selling Rocket!
              </p>
            </li>
            <li className=" w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl dark:bg-black">
              <img src={rocketlaunch} className="w-1/2 mb-6" alt="Explorer" />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                Infinity
              </h3>
              <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-skate-400 ">
                $$$
              </p>
              <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-skate-400">
                Luxury Starship
              </p>
            </li>
          </ul>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />

        <section className="p-6 my-12" id="testimonials">
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Our Testimonials
          </h2>
        </section>
        <hr className="mx-auto bg-black dark:bg-white w-1/2" />
        <section className="p-6 my-12" id="contact">
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Contact Us
          </h2>
        </section>
      </main>
    </>
  );
}

export default Main;
