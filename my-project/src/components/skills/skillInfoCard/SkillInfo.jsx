import React, { useState } from 'react'

const SkillInfo = ({ heading, skills, filteredSkills }) => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Filter skills based on hovered skill
    const filteredSkillsArray = skills ? skills.filter(item => item.name === hoveredSkill) : [];
    return (
        <div className='min-h-[23rem] border rounded-xl  overflow-hidden' >
            <p className='p-4 border-b text-[#ffffff] fontManrope-medium'>{heading}</p>
            <div className='text-white  p-6 fontManrope-regular text-sm relative '>
                {
                    skills && skills.map((item, index) => (
                        <div className='' key={index} onMouseEnter={() => setHoveredSkill(item.name)} onMouseLeave={() => setHoveredSkill(null)}>
                            <div className='flex items-center justify-between cursor-pointer ' onMouseMove={handleMouseMove}>
                                <p>{item.name}</p>
                                {hoveredSkill === item.name && (
                                    <div className='absolute md:right-32 right-20  '>
                                        <img style={{ top: `${mousePosition.y - 350}px` }} className='w-14  transition-all duration-700 ease-in-out' src={item.image.url} alt="" />
                                    </div>
                                )
                                }
                                <p className='text-[#dd8cfa]'>{item.percentage}%</p>
                            </div>
                            <div className='w-[100%] h-[0.5rem] bg-[#1d1f67] rounded-xl m-[1rem] over'>
                                <div className='bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-700 h-[0.5rem] w-[0%] transition-all duration-500 ease-in-out' style={{ width: `${item.percentage}%` }}></div>
                            </div>
                            <div className=''>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SkillInfo