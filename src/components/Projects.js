import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="bg-black my-2">
        <section id="project" className="px-6 md:px-20 py-16 text-white" >

      <h1 className="text-2xl md:text-3xl font-bold border-b-4 border-red-500 w-fit mx-auto mb-12">
        Projects
      </h1>

      {/* GRID — 1 column mobile, 2 columns desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
  bg-[oklch(27.9%_0.041_260.031)]
  backdrop-blur-md 
  rounded-2xl 
  shadow-xl 
  p-6 
  flex flex-col items-center text-center 
  transition-transform duration-300 hover:scale-95
"
          >
            {/* FIXED SIZE IMAGE */}
            <div className="w-full h-56 md:h-64 overflow-hidden rounded-xl mb-5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center transition duration-300 hover:brightness-75 "
              />
            </div>

            {/* TITLE */}
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              {project.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* LINK */}
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white mt-2"
            >
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </section>
    </div>
    
  );
}
