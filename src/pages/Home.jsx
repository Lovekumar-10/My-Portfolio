import { useState } from 'react'

import Hero from "../components/Hero"
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import PracticalLearningJourney from '../components/PracticalLearningJourney';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection/>
      <ProjectsSection/>
      <PracticalLearningJourney/>
      
    </>
  )
}


