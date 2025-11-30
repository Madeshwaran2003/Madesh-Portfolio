import { useEffect, useRef, useState } from "react";

// Import Skill SVGs
import html from "../assert/skills/html.svg";
import css from "../assert/skills/css.svg";
import js from "../assert/skills/js.svg";
import reactjs from "../assert/skills/reactjs.svg";
import nodejs from "../assert/skills/nodejs.svg";
import expressjs from "../assert/skills/expressjs.svg";
import mongodb from "../assert/skills/mongodb.svg";
import git from "../assert/skills/git.svg";
import github from "../assert/skills/github.svg";
import python from "../assert/skills/python.svg";
import java from "../assert/skills/java.svg";
import tailwind from "../assert/skills/tailwind.svg";
import bootstrap from "../assert/skills/bootstrap.svg";
import sql from "../assert/skills/sql.svg";

const skills = [
  { icon: html, name: "HTML" },
  { icon: css, name: "CSS" },
  { icon: js, name: "JavaScript" },
  { icon: reactjs, name: "ReactJS" },
  { icon: nodejs, name: "NodeJS" },
  { icon: expressjs, name: "ExpressJS" },
  { icon: mongodb, name: "MongoDB" },
  { icon: git, name: "Git" },
  { icon: github, name: "GitHub" },
  { icon: python, name: "Python" },
  { icon: java, name: "Java" },
  { icon: tailwind, name: "TailwindCSS" },
  { icon: bootstrap, name: "Bootstrap" },
  { icon: sql, name: "SQL" },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Trigger animation when scrolling to Skills
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="w-full py-10 px-6 md:px-20">
      
      <h1 className="text-2xl md:text-3xl font-bold border-b-4 border-red-500 text-white w-[150px] mb-8 mx-auto w-fit">
        Skills
      </h1>

      {/* GRID — Mobile = 3, Desktop = 5 */}
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-2 ${
              visible ? "skill-show" : "skill-hidden"
            }`}
            style={{
              animationDelay: `${index * 0.12}s`, // Row order animation
            }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-14 h-14 md:w-20 md:h-20 hover:-translate-y-2 transition duration-300"
            />
            <p className="text-white text-sm md:text-base font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}