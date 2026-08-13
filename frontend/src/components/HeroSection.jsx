import React from "react";

const HeroSection = () => (
  <section
    id="home"
    className="text-center py-24 bg-gradient-to-r from-blueberry-medium to-blueberry-dark"
  >
    <h1 className="text-5xl font-extrabold mb-4">Empowering Education Through Technology</h1>
    <p className="text-lg text-blue-100 mb-6">
      Join our vision to make technical excellence accessible worldwide.
    </p>
    <button className="bg-white text-blueberry-dark font-semibold py-2 px-6 rounded shadow hover:bg-blue-100 transition">
      Explore Courses
    </button>
  </section>
);

export default HeroSection;
