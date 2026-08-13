import React from "react";

const courses = [
  { title: "Web Development", desc: "Learn React, Tailwind, Node.js, and more." },
  { title: "AI Fundamentals", desc: "Get started with Machine Learning basics." },
  { title: "Cyber Security", desc: "Understand modern cyberthreats and defenses." },
];

const CoursesSection = () => (
  <section id="courses" className="py-16 bg-blueberry-light bg-opacity-10 text-center text-white">
    <h2 className="text-3xl font-semibold mb-8">Our Top Courses</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10">
      {courses.map((c, i) => (
        <div key={i} className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
          <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
          <p className="text-blue-100">{c.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default CoursesSection;
