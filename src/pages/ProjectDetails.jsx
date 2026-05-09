import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { Helmet } from "react-helmet";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { useEffect } from "react";
import { FaRegHandPointLeft } from "react-icons/fa";

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Force scroll to top
  }, []);

  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className=" max-w-xl w-full text-center p-6 sm:p-10">
          <img
            src="/images/giphy.gif"
            alt="Project Not Found"
            className="w-52 sm:w-64 mx-auto mb-6 object-contain"
          />

          <h1 className="text-3xl sm:text-5xl font-black font-mono mb-4">
            PROJECT NOT FOUND
          </h1>

          <p className="text-gray-600 max-w-md mx-auto mb-8">
            The project you are looking for does not exist or may have been
            removed.
          </p>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 border-2 border-black font-bold shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] transition-all"
          >
            ← Back To Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        {/* PRIMARY SEO */}
        <title>{project.title} | Love Kumar Portfolio</title>

        <meta
          name="description"
          content={`${project.title} - ${project.objective}`}
        />

        <meta
          name="keywords"
          content={`${project.title}, React Project, MERN Stack Project, Love Kumar Portfolio, Web Development, Tailwind CSS, Node.js`}
        />

        <meta name="author" content="Love Kumar" />
        <meta name="robots" content="index, follow" />

        {/* CANONICAL */}
        <link
          rel="canonical"
          href={`https://lovekumar.vercel.app/projects/${project.slug}`}
        />

        {/* OPEN GRAPH */}
        <meta property="og:title" content={`${project.title} | Love Kumar`} />

        <meta property="og:description" content={project.objective} />

        <meta
          property="og:image"
          content="https://lovekumar.vercel.app/images/image.png"
        />

        <meta
          property="og:url"
          content={`https://lovekumar.vercel.app/projects/${project.slug}`}
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Love Kumar Portfolio" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={`${project.title} | Love Kumar`} />

        <meta name="twitter:description" content={project.objective} />

        <meta
          name="twitter:image"
          content="https://lovekumar.vercel.app/images/image.png"
        />
      </Helmet>
      <section className="min-h-screen px-2 sm:px-6 pt-22 pb-20 max-w-7xl mx-auto">
        {/* Back */}
        <div className="inline-flex items-center gap-2 mb-8">
          <Link to="/projects">
            <FaRegHandPointLeft className="text-[25px]" />
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
                <p className="leading-relaxed max-[500px]:text-[13px] sm:text-base">
                  {project.objective}
                </p>
              </section>

              {/* PROBLEM */}
              <section>
                <h3 className="font-mono font-bold mb-2">PROBLEM STATEMENT</h3>
                <p className="leading-relaxed max-[500px]:text-[13px] sm:text-base">
                  {project.problem}
                </p>
              </section>

              {/* SOLUTION */}
              <section>
                <h3 className="font-mono font-bold mb-2">
                  SOLUTION & APPROACH
                </h3>
                <p className="leading-relaxed max-[500px]:text-[13px] sm:text-base">
                  {project.solution}
                </p>
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
                <h3 className="font-mono font-bold mb-2">
                  CHALLENGES & LEARNINGS
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  {project.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </section>

              {/* FUTURE */}
              <section>
                <h3 className="font-mono font-bold mb-2">
                  FUTURE IMPROVEMENTS
                </h3>
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
    </>
  );
};

export default ProjectDetails;
