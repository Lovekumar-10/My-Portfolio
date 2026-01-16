import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import PracticalLearningJourney from '../components/PracticalLearningJourney';

export default function Home() {
  return (
    <>
      {/* SEO / React Helmet */}
      <Helmet>
        <title>Love Kumar | Full Stack Developer | Home</title>
        <meta
          name="description"
          content="Welcome to Love Kumar's portfolio. Projects built with React, Node.js, MongoDB, and more."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Love Kumar | Full Stack Developer | Home" />
        <meta property="og:description" content="Portfolio of Love Kumar showcasing React, Node.js, MongoDB projects and skills." />
        <meta property="og:image" content="/image.png" />
        <meta property="og:url" content="https://github.com/Lovekumar-10/My-Portfolio" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Love Kumar | Full Stack Developer | Home" />
        <meta name="twitter:description" content="Portfolio showcasing projects built with React, Node.js, MongoDB, and more." />
        <meta name="twitter:image" content="/image.png" />
      </Helmet>

      {/* Page Sections */}
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <PracticalLearningJourney />
    </>
  );
}
