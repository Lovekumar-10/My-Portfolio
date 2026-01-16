import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

/* ---------- SOCIAL DATA ---------- */

const socials = [
  {
    name: "GITHUB",
    link: "https://github.com/Lovekumar-10",
    icon: <FaGithub />,
  },
  {
    name: "LINKEDIN",
    link: "https://www.linkedin.com/in/love-kumar96",
    icon: <FaLinkedinIn />,
  },
  {
    name: "INSTAGRAM",
    link: "https://www.instagram.com/love_kumar9654/",
    icon: <FaInstagram />,
  },
];

/* ---------- COMPONENT ---------- */

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t-2 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Left */}
          <div>
            <h3 className="text-xl font-bold tracking-wider mb-3">
              SAY_HELLO
            </h3>

            <p className="text-gray-400 max-w-md mb-4">
              Open for new opportunities and interesting projects.
            </p>

            <a
              href="mailto:Lovekumar161129@gmail.com"
              className="inline-block text-lg font-semibold border-b-2 border-yellow-400 hover:text-yellow-400 transition"
            >
              Lovekumar161129@gmail.com
            </a>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-lg font-bold tracking-wider mb-4">
              SOCIALS
            </h4>

            <div className="flex gap-4 flex-wrap">
              {socials.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  className="w-12 h-12 border-2 border-white flex items-center justify-center
                             hover:bg-yellow-400 hover:text-black transition shadow-[0px_0px_0_0_#c69405,2px_2px_0_0_#c69405] active:shadow-[0_0_0_0_#000] hover:brightness-105"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-800" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between text-xs text-gray-500 gap-4">
          <span>
            © 2026 LOVE KUMAR — DESIGNED TO BE BOLD
          </span>
          <span>
            BUILD_VERSION: 1.0.0
          </span>
        </div>

      </div>
    </footer>
  );
}
