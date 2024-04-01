import React from 'react'
import Hero from '../components/Hero'

import Services from '../components/Services'
import Skills from '../components/skills/Skills'
import About from '../components/about/About'
import Projects from '../components/projects/Projects'
import Timeline from '../components/timeline/Timeline'



const Homepage = () => {

  return (
    <div>
        {/* <Hero/> */}
        <About />
        <Services />
        <Skills/>
        <Projects />
        <Timeline />
    </div>
  )
}

export default Homepage