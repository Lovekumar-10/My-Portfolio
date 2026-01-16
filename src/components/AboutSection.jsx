

import theme from "../theme";

/* ---------- Tech Data ---------- */
const techStack = [
  {
    name: "HTML",
    percent: 90,
    color: "orange",
    bg: "bg-orange-500",
    icon: "html5",
  },
  {
    name: "CSS",
    percent: 95,
    color: "blue",
    bg: "bg-blue-500",
    icon: "css3",
  },
  {
    name: "JavaScript",
    percent: 80,
    color: "yellow",
    bg: "bg-yellow-400",
    icon: "javascript",
  },
  {
    name: "Tailwind CSS",
    percent: 94,
    color: "cyan",
    bg: "bg-cyan-500",
    icon: "tailwindcss",
  },
  {
    name: "Bootstrap",
    percent: 89,
    color: "purple",
    bg: "bg-purple-600",
    icon: "bootstrap",
  },
  {
    name: "MongoDB",
    percent: 75,
    color: "green",
    bg: "bg-green-500",
    icon: "mongodb",
  },
  {
    name: "Express",
    percent: 90,
    color: "blue",
    bg: "bg-blue-600",
    icon: "express",
  },
  {
    name: "React",
    percent: 80,
    color: "cyan",
    bg: "bg-[#61DAFB]",
    icon: "react",
  },
  {
    name: "Node.js",
    percent: 70,
    color: "green",
    bg: "bg-green-600",
    icon: "nodedotjs",
  },
];

/* ---------- Tech Card ---------- */
const TechCard = ({ tech }) => {
  return (
    <div className="group p-1 w-full mx-auto">
      <div className="space-y-2">
        <div className="flex items-center  gap-3">
          <img
            src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${tech.icon}.svg`}
            alt={tech.name}
            className={`w-[50px] h-[50px] p-1 ${tech.bg} rounded-lg shadow-lg group-hover:scale-110 transition-transform`}
          />

          <h4 className={`${theme.fonts.normal} font-bold text-xl truncate`}>
            {tech.name}
          </h4>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs text-gray-600">
            <span>Expertise</span>
            <span>{tech.percent}%</span>
          </div>

          <div className="w-full bg-gray-200 h-3 rounded-full border-2 border-gray-300">
            <div
              className={`h-3 rounded-full bg-${tech.color}-500 border-2 border-${tech.color}-700`}
              style={{ width: `${tech.percent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- About Section ---------- */
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">

<div className="space-y-8 text-center md:text-left flex flex-col items-center md:items-start">
  <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent leading-[0.9] tracking-tight">
    MY STORY
  </h2>

  <div className={`space-y-6 text-lg ${theme.colors.secondary}`}>
    <p className="text-2xl md:text-3xl font-mono font-bold text-black max-w-lg leading-snug">
      Learning how systems work, not just how interfaces look.
    </p>

    <p className="leading-relaxed max-w-lg">
      My journey into development started with curiosity — breaking things,
      fixing them, and slowly understanding what’s happening behind the scenes.
      JavaScript became the tool that helped me connect logic, data, and user
      experience into something meaningful.
    </p>

    <p className="leading-relaxed max-w-lg">
      I enjoy working close to the core of an application — handling data,
      managing state, and building features that are reliable and easy to
      maintain. I prefer clear thinking over shortcuts and believe good software
      is built step by step.
    </p>

    <div className="border-l-4 border-yellow-400 pl-4 font-medium font-mono text-gray-800 leading-relaxed max-w-lg">
      Current focus: strengthening backend fundamentals, going deep into one
      domain, and building stable, scalable systems with intention.
    </div>
  </div>
</div>


        {/* Right */}
        <div className="space-y-0.5" >
           <h3 className={`text-3xl md:text-4xl font-bold text-black  bg-yellow-400 text-black border-2 border-black shadow-[0px_0px_0_0_#c69405,2px_2px_0_0_#c69405]`}>
            TECH STACK
          </h3>

          <div  className="h-[660px] overflow-y-auto p-6 bg-white/80" 
             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none'  }}>
            <div className="space-y-2">
              {techStack.map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
          
        </div>
        

      </div>
    </section>
  );
};

export default AboutSection;






