

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CoolorsText({ text }) {
  const containerRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const letters = containerRef.current.querySelectorAll(".letter");

    letters.forEach((letter) => {
      let tl;

      letter.addEventListener("mouseenter", () => {
        // PLAY SOUND ON TOUCH (online sound)
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }

        if (tl) tl.kill();

        gsap.set(letter, { color: randomColor() });

        tl = gsap.timeline();
        tl.to(letter, { rotation: -16, duration: 0.18, ease: "power2.out", transformOrigin: "50% 100%" });
        tl.to(letter, { rotation: 14, duration: 0.22, ease: "sine.inOut" });
        tl.to(letter, { rotation: -6, duration: 0.25, ease: "sine.inOut" });
        tl.to(letter, { rotation: 0, duration: 0.45, ease: "elastic.out(1, 0.4)" });
        tl.to(letter, { rotation: -7, duration: 0.15, ease: "sine.inOut" });
        tl.to(letter, { rotation: 0, duration: 1, ease: "elastic.out(1, 0.4)" });
        tl.to(letter, { color: "var(--text)", duration: 0.3 });
      });
    });
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* ONLINE SOUND */}
      <audio
        ref={audioRef}
        src="https://freesound.org/data/previews/256/256113_3263906-lq.mp3"
        preload="auto"
      />

      <div className="runningTextWrap">
        <div
          ref={containerRef}
          className="select-none cursor-pointer font-[Space_Grotesk] text-8xl sm:text-[150px] md:text-[150px] lg:text-[180px] font-bold runningText"
        >
          {text.split("").map((char, i) => (
            <span key={i} className="letter inline-block" style={{ transformOrigin: "50% 100%" }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        <div className="runningText">
          {text.split("").map((char, i) => (
            <span key={i + text.length} className="letter inline-block" style={{ transformOrigin: "50% 100%" }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .runningTextWrap {
          display: flex;
          gap: 0;
          white-space: nowrap;
          animation: moveText 15s linear infinite;
        }

        .runningText {
          display: inline-flex;
        }

        @keyframes moveText {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}

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
