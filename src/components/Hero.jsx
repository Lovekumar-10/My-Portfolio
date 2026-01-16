
import theme from "../theme";
import { useNavigate } from "react-router-dom";


export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen 
        bg-white-950
        pt-[72px]
        px-4 sm:px-6
        pb-4
        after:content-['']
        after:absolute after:bottom-0 after:left-0
        after:w-full after:h-[2px] after:bg-black
      "
    >
      <div className="py-20 px-4 sm:px-6  max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left content */}
        <div className="text-center md:text-left">
          <h1
            className={`${theme.fonts.heading} text-3xl sm:text-4xl md:text-6xl mb-4 leading-tight`}
          >
            Hi, I’m{" "}
            <span className={theme.colors.primaryText}>
              Love Kumar
            </span>
          </h1>

          <p
            className={`mb-6 text-base sm:text-lg ${theme.colors.secondary}`}
          >
            A passionate <span className="font-semibold font-mono bg-yellow-400 text-black">MERN Stack Developer</span>{" "}
            who loves crafting fast, scalable, and user-friendly web applications.
            I turn ideas into clean, functional, and modern digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className={theme.buttons.pixel}
            onClick={() => navigate("/projects")}

            >
              View Projects
            </button>

            <button
              className={`px-5 py-2 ${theme.colors.border} ${theme.colors.primaryText} ${theme.colors.shadow} ${theme.colors.activeShadow} font-bold`}
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="relative flex justify-center mt-12 md:mt-0">

          {/* Splash background (10% bigger) */}
          <div
            className="
              absolute
              w-72 h-72
              sm:w-80 sm:h-80
              md:w-[350px] md:h-[350px]
              rounded-[40%_1%_59%_58%]
              bg-yellow-400/80
              mt-0
              md:mt-20.5
            "
          />

          {/* Image container (10% bigger) */}
          <div
            className="
              relative
              w-64 h-64
              sm:w-72 sm:h-72
              md:w-100 md:h-100
              rounded-2xl
              mt-7.5
              overflow-hidden
              flex items-center justify-center
            "
          >
            <img
              // src="/src/assets/Lovekumar1.png"
              src="/src/assets/Lovek.png"
              alt="Love Kumar"
              className="w-full h-full object-cover rounded-[50%]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
