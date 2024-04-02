import React from 'react'
import Hero from '../components/Hero'

import Services from '../components/Services'
import Skills from '../components/skills/Skills'
import About from '../components/about/About'
import Projects from '../components/projects/Projects'
import Timeline from '../components/timeline/Timeline'
import Testimonials from '../components/testimonials/Testimonials'
import Contact from '../components/contact/Contact'
import ProjectSkeleton from '../components/skeleton/ProjectSkeleton'
import Navbar from '../components/navbar/Navbar'



const Homepage = () => {

  return (
    <div>
        <Hero/>
        <About />
        <Services />
        <Skills/>
        <Projects />
        <Timeline />
        <Testimonials />
        <Contact />
        <div className='fixed bottom-6 z-50'>
                <Navbar />
            </div>
    </div>
  )
}

export default Homepage