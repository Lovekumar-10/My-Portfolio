

import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { useEffect } from "react";


 

const ProjectDetails = () => {
   useEffect(() => {
    window.scrollTo(0, 0); // Force scroll to top
  }, []);

  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p className="pt-32 text-center">Project not found</p>;
  }

  return (
    <section className="min-h-screen px-2 sm:px-6 pt-22 pb-20 max-w-7xl mx-auto">
      
      {/* Back */}
      <div className="inline-flex items-center gap-2 mb-8">
        <Link to="/projects">
          <img
            src="/images/Arrrow.png"
            alt="Back-icons"
            className="h-[5.3] w-14 object-cover"
          />
        </Link>
        <h2 className="font-mono font-bold">Back To Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* LEFT PREVIEW */}
        <div className="md:sticky md:top-[148px] h-fit"> 
        <div className="border-2 border-black px-2  py-0  sm:px-1 bg-white shadow-[4px_4px_0_0_#000] h-[520px] flex flex-col overflow-auto scrollbar-hide">
          
            {project.live ? (
                  <iframe
                    src={project.live}
                    className="w-full h-full border-none"
                    title={project.title}
                    loading="lazy"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}  
          <span className="inline-block  text-xs font-mono bg-black text-white px-2 py-1">
            PREVIEW
          </span>
        </div>
        </div>

        {/* RIGHT DETAILS */}
        <div className="border-2 border-black shadow-[4px_4px_0_0_#000]">
          
          <div className="bg-yellow-400 border-b-2 border-black px-4 py-2 font-mono font-bold shadow-[4px_4px_0_0_#000]">
            PROJECT DETAILS
          </div>

          <div className="px-2 py-6  sm:px-6 space-y-8 text-gray-800">

            {/* OVERVIEW */}
            <section>
              <h3 className="font-mono font-bold mb-2">OVERVIEW</h3>
              <p className="leading-relaxed max-[500px]:text-[13px] sm:text-base">{project.objective}</p>
            </section>

            {/* PROBLEM */}
            <section>
              <h3 className="font-mono font-bold mb-2">PROBLEM STATEMENT</h3>
              <p className="leading-relaxed max-[500px]:text-[13px] sm:text-base">{project.problem}</p>
            </section>

            {/* SOLUTION */}
            <section>
              <h3 className="font-mono font-bold mb-2">SOLUTION & APPROACH</h3>
              <p className="leading-relaxed max-[500px]:text-[13px] sm:text-base">{project.solution}</p>
            </section>

            {/* TECH STACK */}
            <section>
              <h3 className="font-mono font-bold mb-2">TECH STACK</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-sm border-2 border-black bg-yellow-400 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>

            {/* FEATURES */}
            <section>
              <h3 className="font-mono font-bold mb-2">KEY FEATURES</h3>
              <ul className="list-disc pl-5 space-y-1">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </section>

            {/* CHALLENGES */}
            <section>
              <h3 className="font-mono font-bold mb-2">CHALLENGES & LEARNINGS</h3>
              <ul className="list-disc pl-5 space-y-1">
                {project.challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </section>

            {/* FUTURE */}
            <section>
              <h3 className="font-mono font-bold mb-2">FUTURE IMPROVEMENTS</h3>
              <ul className="list-disc pl-5 space-y-1">
                {project.improvements.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </section>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4 pt-4">
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="px-1 py-2 sm:px-5 sm:py-2 border-1 sm:border-3  text-[12px] sm:text-[18px] flex items-center justify-center gap-2 border-black bg-yellow-400 font-bold active:shadow-[0_0_0_0_#000]  hover:bg-white shadow-[4px_4px_0_0_#000]"
              >
                {/* VIEW CODE */}
                <FaGithub className="text-lg" />
                <span>View Code</span>
              </a>
              {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-1 py-2 sm:px-5 sm:py-2 border-1 sm:border-3 text-[12px] sm:text-[18px] flex items-center justify-center gap-2 border-black border-2 border-black shadow-[0px_0px_0_0_#000,4px_4px_0_0_#000] active:shadow-[0_0_0_0_#000] hover:bg-yellow-400 font-bold transition"
              >
                {/* LIVE DEMO */}
                <span>Live Demo</span>
                <HiArrowUpRight className="text-lg" />    
              </a>
               )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;

