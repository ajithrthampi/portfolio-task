import React from 'react'

const SkillCard = ({ title, isActive, onClick }) => {
  return (
    <div className={`${isActive? "": ""}`} 
    onClick={() => onClick()}
    >
      <div className=' border rounded-xl md:p-7 p-5 bg-[#150b26] text-white fontManrope-medium cursor-pointer transition ease-in hover:bg-purple-800 flex items-center justify-center '>
        <span className='md:text-lg text-base fontManrope-regular tracking-wider '>{title}</span>
      </div>
    </div>
  )
}

export default SkillCard