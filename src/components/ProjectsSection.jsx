
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { Helmet } from "react-helmet";
import theme from "../theme";

const ProjectsSection = () => {
  return (
    <>
    <Helmet>
        <title>Love Kumar | Full Stack Developer | Projects</title>
        <meta
          name="description"
          content="Explore Love Kumar's projects built with React, Node.js, MongoDB, and more. Detailed showcase of web development skills."
        />
        <meta property="og:title" content="Love Kumar | Projects" />
        <meta property="og:description" content="Portfolio projects built with React, Node.js, MongoDB, and more." />
        <meta property="og:image" content="/image.png" />
        <meta property="og:url" content="https://github.com/Lovekumar-10/My-Portfolio/projects" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Love Kumar | Projects" />
        <meta name="twitter:description" content="Portfolio projects built with React, Node.js, MongoDB, and more." />
        <meta name="twitter:image" content="/image.png" />
      </Helmet>
       <section
      id="projects"
      className="py-20 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-5xl md:text-6xl font-bold text-black">
          PROJECTS
        </h2>
        <p className={`mt-4 max-w-xl text-lg ${theme.colors.secondary}`}>
          Selected work focused on understanding systems, not just UI.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="block"
          >
            <div
              className="
                relative
                border-2 border-black bg-white
                shadow-[4px_4px_0_0_#000]
                hover:translate-x-[-2px] hover:translate-y-[-2px]
                hover:shadow-[6px_6px_0_0_#000]
                transition-all cursor-pointer
              "
            >
              {/* LEVEL BADGE */}
              {project.level && (
                <span
                  className={`
                    absolute top-3 left-[-2px] z-10
                    pl-3 pr-8 py-1 text-xs font-bold text-black
                     font-mono
                    ${
                      project.level === "Frontend"
                         ? "bg-purple-400"
                        : project.level === "Backend"
                        ? "bg-cyan-400"
                        : project.level === "Full Stack"
                        ? "bg-red-400"
                        : "bg-gray-300"
                    }
                  `}
                  style={{
                    clipPath:
                      "polygon(0 0, 85% 0, 75% 50%, 85% 100%, 0 100%, 0% 50%)",
     
                  }}
                >
                  {project.level}
               </span>
              )}

              {/* Image / Preview */}
              <div className="h-44 overflow-hidden border-b-2 border-black">
                {project.live ? (
                  <iframe
                    src={project.live}
                    className="w-full h-full border-none grayscale hover:grayscale-0 transition "
                    title={project.title}
                    loading="lazy"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold font-mono text-black">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 line-clamp-3">
                  {project.objective}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-sm font-mono px-2 py-1 bg-yellow-400 border border-black"
                    >
                      {t}
                    </span>
                  ))}

                  {project.tech.length > 3 && (
                    <span className="text-sm font-mono px-2 py-1 bg-white border border-black text-gray-600">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>

    </>
 
  );
};

export default ProjectsSection;
