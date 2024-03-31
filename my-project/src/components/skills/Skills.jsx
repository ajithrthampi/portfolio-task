import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../context/ApiContext'
import SkillCard from './skillCard/SkillCard'
import SkillInfo from './skillInfoCard/SkillInfo'
import "../skills/skills.css"

const Skills = () => {
    const { state } = useContext(ApiContext)
    const [skills, setSkills] = useState([])
    const [filteredSkills, setFilteredSkills] = useState([])
    const [selectedSkills, setSelectedSkills] = useState([])

    const handleSelectedSkills = (data) => {
        setSelectedSkills(data)
    }

    useEffect(() => {
        if (state.skills) {
            setSkills(state.skills);
        }
    }, [state.skills]);

    useEffect(() => {
        const frontendSkills = skills.filter(skill => ['HTML', 'CSS', 'Tailwind', 'React', 'Next.js', 'Redux'].includes(skill.name));
        const backendSkills = skills.filter(skill => ['Node.js', 'MongoDB', 'GraphQL'].includes(skill.name));
        const toolsSkills = skills.filter(skill => ['Docker', 'Figma', , 'Git', 'Github', 'Sass', 'Vercel', 'Three.js'].includes(skill.name));
        const languageSkills = skills.filter(skill => ['C++', 'Python', 'TypeScript', 'Javascript',].includes(skill.name))

        const frontendCategory = { title: "Frontend", skills: frontendSkills };
        const backendCategory = { title: "Backend", skills: backendSkills };
        const toolsCategory = { title: "Tools", skills: toolsSkills };
        const languageCategory = { title: "Language", skills: languageSkills };


        // Combine all the categories into a single array
        const allSkills = [frontendCategory, backendCategory, toolsCategory, languageCategory];

        // Now you have a single array containing all the filtered categories
        if (allSkills) {
            setFilteredSkills(allSkills)
        }
        setSelectedSkills(allSkills[0])
    }, [skills]);
    return (
        <div className='h-full  skills-container '>
            <hr className="h-[1.5px] bg-gray-900 bg-gradient-to-r from-[#0b011d] via-[#372c4b] to-[#0b011d]  border-0 " />
            <div className='xl:px-[150px] md:px-[40px]  sm:px-[30px] vsm:px-[12px] px-[7px] md:py-28 py-16 '>
                <div className='flex flex-col  justify-center items-center '>
                    <h2 className='bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent md:text-[70px] sm:text-[70px] 
                    vsm:text-[40px] text-[40px]  font-inter fontManrope-bold font-medium '>
                        My Skills
                    </h2>
                </div>

                <div className='pt-20 flex md:flex-row flex-col-reverse  items-start gap-7'>
                    <div className='flex-1 md:w-auto w-[100%] lg:gap-9 gap-5 grid grid-cols-2'>
                        {
                            filteredSkills.map((item, index) => (
                                <SkillCard
                                    key={index}
                                    title={item.title}
                                    isActive={selectedSkills.title === item.title}
                                    onClick={() => {
                                        handleSelectedSkills(item)
                                    }}
                                />
                            ))
                        }
                    </div>
                    <div className='flex-1  md:w-auto w-[100%]'>
                        <SkillInfo
                            filteredSkills={filteredSkills}
                            heading={selectedSkills?.title}
                            skills={selectedSkills?.skills}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills