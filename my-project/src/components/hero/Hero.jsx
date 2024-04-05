import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { ApiContext } from '../../context/ApiContext'
import "../hero/hero.css"


const Hero = () => {
  const { state } = useContext(ApiContext)
  const [details, setDetails] = useState([])

  useEffect(() => {
    if (state && state.about) {
      setDetails(state.about)
    }
  }, [state])



  return (
    <section className='h-screen hero-container relative md:flex ' id='home' >
      <div className='xl:px-[150px] md:px-[40px]  sm:px-[30px] vsm:px-[4px] px-[7px] md:py-28 py-16 flex flex-col justify-center'>
        <div className='flex items-center  flex-col'>
          <h1 className='fontManrope-semibold sm:block hidden text-center md:text-4xl bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent'>I'am {details?.name}</h1>

          <div className='pt-10   '>
            <div className='rounded-full w-[155px] h-[155px]  flex justify-center items-center bg-gradient-to-t from-[#3b3b3b]'>
              <img className='w-32 h-32 rounded-full object-cover' src={details?.avatar?.url} alt="" />
            </div>
          </div>
          <h1 className='fontManrope-semibold  pt-6 sm:hidden vsm:text-3xl text-xl bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent'>I'am {details?.name}</h1>

          <div className=' text-center sm:pt-0 pt-10'>
            <h2 className='bg-clip-text bg-gradient-to-r   from-[#9e51b9] via-[#bbb8c0] to-[#7c66e3] text-transparent lg:text-[70px] md:text-[60px] sm:text-[40px] 
              vsm:text-[26px] text-[25px] uppercase  font-inter fontManrope-extrabold font-medium sm:w-[900px sm:leading-[79px] leading-10'>
              {details?.title} & Designer
            </h2>
          </div>
        </div>
        <div className='flex justify-center items-center '>
          <p className=' absolute bottom-10 text-[#ffffff] fontManrope-medium text-center'>{details.subTitle}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero