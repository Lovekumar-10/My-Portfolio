// import { FaCode, FaProjectDiagram, FaBolt, FaRobot, FaRocket, FaUsers, FaCheckCircle } from "react-icons/fa";

// export default function PracticalLearningJourney() {
//   return (
//     <section className="w-full bg-white text-black px-6 md:px-12 py-16">
//       {/* Header */}
//       <div className="max-w-6xl mx-auto">
//         <span className="inline-block mb-3 text-xs font-semibold bg-black text-white px-3 py-1">
//           FRESHER'S PERSPECTIVE
//         </span>
//         <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
//           PRACTICAL LEARNING <span className="bg-yellow-400 px-2">JOURNEY</span>
//         </h2>
//         <p className="mt-4 text-gray-600 max-w-2xl">
//           Transitioning from a self-taught enthusiast to a professional developer.
//           I haven’t spent years in corporate cubicles, but I’ve spent thousands of hours
//           in the terminal, building real solutions and breaking things to learn how to fix them.
//         </p>
//       </div>

//       {/* What I've Been Doing */}
//       <div className="max-w-6xl mx-auto mt-14">
//         <h3 className="inline-block border-2 border-black px-4 py-2 font-bold text-sm mb-8">
//           WHAT I’VE BEEN DOING
//         </h3>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           <Card icon={<FaCode />} title="MENI MASTERY">
//             Deep-diving into full-stack workflows, from schema design in Mongo to complex state in React.
//           </Card>
//           <Card icon={<FaProjectDiagram />} title="API ARCHITECTURE">
//             Building RESTful systems with Express, focusing on security, middleware, and performance.
//           </Card>
//           <Card icon={<FaBolt />} title="REAL-TIME FEATURES">
//             Implementing WebSocket-based flows for live updates, chat systems, and sync actions.
//           </Card>
//           <Card icon={<FaRobot />} title="AI INTEGRATION">
//             Exploring LLM wrappers and LangChain to add intelligent features to real-world apps.
//           </Card>
//         </div>
//       </div>

//       {/* Lower Grid */}
//       <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Projects */}
//         <div className="lg:col-span-2 space-y-8">
//           <div>
//             <span className="text-xs font-bold bg-black text-white px-3 py-1">PROJECT-BASED EXPERIENCE</span>
//             <h4 className="mt-4 text-xl font-bold">E-COMMERCE ENGINE</h4>
//             <p className="mt-2 text-gray-600">
//               A full-scale store with Redux state management and Stripe integration.
//               Solved critical race conditions in inventory updates.
//             </p>
//             <div className="flex gap-3 mt-3 flex-wrap">
//               <Tag>Redux Toolkit</Tag>
//               <Tag>Stripe</Tag>
//               <Tag>Express</Tag>
//             </div>
//           </div>

//           <div>
//             <h4 className="text-xl font-bold flex items-center gap-2">
//               <FaUsers /> DEV SOCIAL NETWORK
//             </h4>
//             <p className="mt-2 text-gray-600">
//               Optimized MongoDB aggregation pipelines to handle complex feed logic,
//               reducing query time by 40%.
//             </p>
//             <div className="flex gap-3 mt-3 flex-wrap">
//               <Tag>MongoDB</Tag>
//               <Tag>Aggregation</Tag>
//               <Tag>Socket.IO</Tag>
//             </div>
//           </div>
//         </div>

//         {/* Side Cards */}
//         <div className="space-y-6">
//           <div className="border-2 border-black p-6">
//             <h5 className="font-bold mb-3">CURRENT FOCUS</h5>
//             <ul className="space-y-2 text-sm">
//               <li className="flex gap-2 items-start"><FaCheckCircle className="mt-1" /> Next.js 14 App Router & SSR Patterns</li>
//               <li className="flex gap-2 items-start"><FaCheckCircle className="mt-1" /> PostgreSQL & Prisma for type-safe DBs</li>
//               <li className="flex gap-2 items-start"><FaCheckCircle className="mt-1" /> Automated testing with Vitest/Cypress</li>
//             </ul>
//           </div>

//           <div className="bg-yellow-400 p-6">
//             <h5 className="font-bold mb-3">CORE STRENGTHS</h5>
//             <ul className="space-y-2 text-sm">
//               <li className="flex gap-2 items-center"><FaRocket /> Fast Learner</li>
//               <li className="flex gap-2 items-center"><FaRocket /> Problem Solver</li>
//               <li className="flex gap-2 items-center"><FaRocket /> Clean Code Advocate</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Card({ icon, title, children }) {
//   return (
//     <div className="border-2 border-black p-6 hover:bg-yellow-400 transition">
//       <div className="text-xl mb-3">{icon}</div>
//       <h4 className="font-bold mb-2">{title}</h4>
//       <p className="text-sm text-gray-700">{children}</p>
//     </div>
//   );
// }

// function Tag({ children }) {
//   return (
//     <span className="text-xs border border-black px-2 py-1">{children}</span>
//   );
// }







import {
  FaCode,
  FaProjectDiagram,
  FaBolt,
  FaRobot,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

/* ---------- DATA ---------- */

const learningCards = [
  {
    icon: <FaCode />,
    title: "MERN MASTERY",
    desc: "Deep-diving into full-stack workflows, from schema design in MongoDB to complex state handling in React.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "API ARCHITECTURE",
    desc: "Designing RESTful APIs using Express with focus on security, middleware layering, and performance.",
  },
  {
    icon: <FaBolt />,
    title: "REAL-TIME FEATURES",
    desc: "Building real-time systems using Socket.IO and WebRTC for live updates, chat, and streaming.",
  },
  {
    icon: <FaRobot />,
    title: "AI INTEGRATION",
    desc: "Integrating OpenAI APIs to build intelligent features like AI chat, summaries, and content generation.",
  },
];

const projects = [
  {
    title: "AI-POWERED STUDY ASSISTANT",
    year: "2025",
    desc: "Created an AI-based study tool where students can generate notes, summaries, and flashcards. Added quiz generation, mind-map tool using TLDraw, and a community section with ImageKit file storage.",
    tech: ["MERN", "OpenAI API", "TLDraw", "ImageKit"],
    learning: "Learned to integrate AI APIs, manage complex React state, implement file storage, and create interactive tools like quizzes and mind-maps.",
  },
  {
    title: "SMART SEARCH ENGINE",
    year: "2025",
    desc: "Developed a smart search engine for web, image, video, and news results. Integrated AI chat, smart summaries, multi-language support, UI customization, and OAuth authentication.",
    tech: ["MERN", "OpenAI API", "OAuth", "Google", "GitHub"],
    learning: "Gained experience in building scalable search systems, implementing OAuth authentication, AI chat features, and multi-language support.",
  },
  {
    title: "REAL-TIME VIDEO STREAMING PLATFORM",
    year: "2025",
    desc: "Built a real-time video & audio platform similar to Zoom/Meet with secure auth, private rooms, screen sharing, messaging, and WebRTC-based peer streaming.",
    tech: ["MERN", "WebRTC", "Socket.IO"],
    learning: "Learned real-time communication with WebRTC & Socket.IO, handling secure authentication, private rooms, and media streaming performance.",
  },
];


const focusList = [
  "Mastering core React concepts",
  "Learning Next.js basics",
  "Improving JavaScript & logic",
  "Practicing DSA for interviews",
  "Writing cleaner & optimized code",
];


const strengths = [
  "Fast learner",
  "Problem solver",
  "Hands-on project experience",
  "Strong fundamentals",
  "Consistent and focused",
];


/* ---------- COMPONENT ---------- */

export default function PracticalLearningJourney() {
  return (
    <section className="w-full bg-white text-black  ">
      <div className="py-20 pb-5 px-4 sm:px-6 max-w-7xl mx-auto ">
        <span className="inline-block mb-3 text-xs font-semibold bg-black text-white px-3 py-1 shadow-[0px_0px_0_0_#c69405,4px_4px_0_0_#c69405]">
         BUILDING REAL-WORLD EXPERIENCE
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold">
          PRACTICAL LEARNING <span className="bg-yellow-400 px-2">JOURNEY</span>
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl">
          Transitioning from a self-taught enthusiast to a professional developer.
          Thousands of hours spent building, breaking, and fixing real systems.
        </p>
      </div>

      {/* Learning Cards */}
      <div className="py-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <h3 className="inline-block border-2 border-black px-4 py-2 font-bold text-sm mb-8">
          WHAT I’VE BEEN DOING
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningCards.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </div>

      {/* Projects + Side */}
      <div className=" py-20 px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Projects */}
        <div className="lg:col-span-2 space-y-10">
          <span className="text-xs font-bold bg-black text-white px-3 py-1 shadow-[0px_0px_0_0_#c69405,4px_4px_0_0_#c69405]">
            PROJECT-BASED EXPERIENCE
          </span>

          {projects.map((project, i) => (
            <div key={i}>
              <h4 className="mt-4 text-xl lg:text-2xl font-bold text-black/100  ">
                {project.title}{" "}
                {/* <span className="text-sm font-normal">({project.year})</span> */}
              </h4>

              <p className="mt-2 text-gray-600">{project.desc}</p>

              {project.learning && (
                <p className="mt-2 text-black/100  ">
                    <span className="font-bold text-black/100 font-mono ">What I learned: </span>
                    <span className="text-black/100 ">{project.learning}</span>
                </p>
               )}

              <div className="flex gap-3 mt-3 flex-wrap">
                {project.tech.map((t, idx) => (
                  <Tag key={idx}>{t}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Side Cards */}
        <div className="space-y-6 ">
          <div className="border-2 border-black p-6 shadow-[4px_4px_0_0_#000]">
            <h5 className="font-bold mb-3">CURRENT FOCUS</h5>
            <ul className="space-y-2 text-sm">
              {focusList.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <FaCheckCircle className="mt-1" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-yellow-400 p-6  border-2 border-black bg-white shadow-[4px_4px_0_0_#000] ">
            <h5 className="font-bold mb-3">CORE STRENGTHS</h5>
            <ul className="space-y-2 text-sm">
              {strengths.map((s, i) => (
                <li key={i} className="flex gap-2 items-center">
                  <FaRocket /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- REUSABLE ---------- */

function Card({ icon, title, desc }) {
  return (
    <div className="border-2 border-black p-6 hover:bg-yellow-400 transition  shadow-[4px_4px_0_0_#000]">
      <div className="text-xl mb-3 ">{icon}</div>
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-sm text-gray-700">{desc}</p>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="text-xs border border-black px-2 py-1 bg-yellow-400  shadow-[2px_2px_0_0_#000]">
      {children}
    </span>
  );
}
