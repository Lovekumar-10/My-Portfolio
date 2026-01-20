import { useEffect } from "react";
import gsap from "gsap";
import theme from "../theme";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  function splitLetters(text) {
  return text.split("").map((char, i) => (
    <span
      key={i}
      className="letter inline-block"
      style={{ transformOrigin: "50% 100%" }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

useEffect(() => {
  const letters = document.querySelectorAll(".letter");

  letters.forEach((letter) => {
    let tl;

    letter.addEventListener("mouseenter", () => {
      if (tl) tl.kill();

      gsap.set(letter, { color: randomColor() });

      tl = gsap.timeline();

      tl.to(letter, {
        rotation: -16,
        duration: 0.18,
        ease: "power2.out",
        transformOrigin: "50% 100%",
      });

      tl.to(letter, {
        rotation: 14,
        duration: 0.22,
        ease: "sine.inOut",
      });

      tl.to(letter, {
        rotation: -6,
        duration: 0.25,
        ease: "sine.inOut",
      });

      tl.to(letter, {
        rotation: 0,
        duration: 0.45,
        ease: "elastic.out(1, 0.4)",
      });

      tl.to(letter, {
        rotation: -7,
        duration: 0.15,
        ease: "sine.inOut",
      });

      tl.to(letter, {
        rotation: 0,
        duration: 1,
        ease: "elastic.out(1, 0.4)",
      });

      tl.to(letter, {
        color: "var(--text)",
        duration: 0.3,
      });
    });
  });
}, []);




function randomColor() {
  const colors = [
    "#FBBF24",
    "#EF476F",
    "#06D6A0",
    "#118AB2",
    "#8338EC",
    "#FB5607",
    "#FF9F1C",
    "#2EC4B6",
    "#3A86FF",
    "#9B5DE5",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

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
            className={` font-[Space_Grotesk]  text-3xl sm:text-4xl md:text-6xl lg:text-[100px] font-bold  mb-4 leading-tight`}
          >
            {splitLetters("Hi, I’m ")}
            <span className={theme.colors.primaryText}>
            {splitLetters("Love Kumar")}
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
              src="/images/Lovek.png"
              alt="Love-Kumar"
              className="w-full h-full object-cover rounded-[50%]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
