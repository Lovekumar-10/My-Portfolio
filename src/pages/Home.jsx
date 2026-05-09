import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import PracticalLearningJourney from "../components/PracticalLearningJourney";
import CoolorsText from "../components/CoolorsText";

export default function Home() {
  return (
    <>
      {/* SEO / React Helmet */}
      <Helmet>
        {/* Primary SEO */}
        <title>
          Love Kumar | MERN Stack Developer | React & Node.js Portfolio
        </title>

        <meta
          name="description"
          content="Love Kumar is a MERN Stack Developer building modern web applications using React, Node.js, MongoDB, Express, and Tailwind CSS. Explore projects, logistics websites, and full stack development work."
        />

        <meta
          name="keywords"
          content="Love Kumar, MERN Developer, React Developer, Full Stack Developer, Node.js Developer, MongoDB, Tailwind CSS, Portfolio Website, Web Developer India, JavaScript Developer"
        />

        <meta name="author" content="Love Kumar" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://lovekumar.vercel.app/" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Love Kumar | MERN Stack Developer Portfolio"
        />

        <meta
          property="og:description"
          content="Explore projects and modern web applications built by Love Kumar using React, Node.js, MongoDB, Express, and Tailwind CSS."
        />

        <meta
          property="og:image"
          content="https://lovekumar.vercel.app/images/image.png"
        />

        <meta property="og:url" content="https://lovekumar.vercel.app/" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Love Kumar Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Love Kumar | MERN Stack Developer"
        />

        <meta
          name="twitter:description"
          content="Portfolio showcasing React, Node.js, MongoDB, Express, and Tailwind CSS projects."
        />

        <meta
          name="twitter:image"
          content="https://lovekumar.vercel.app/images/image.png"
        />
      </Helmet>

      {/* Page Sections */}
      <Hero />
      <AboutSection />
      {/* <ProjectsSection /> */}
      <ProjectsSection />
      <PracticalLearningJourney />
      <CoolorsText text="Scroll. Explore. Connect. Let’s build something awesome" />
    </>
  );
}
