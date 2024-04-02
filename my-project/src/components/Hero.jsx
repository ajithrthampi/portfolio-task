import React, { useEffect, useState } from 'react'
import axios from "axios"

const Hero = () => {
  const [state, setState] = useState('')
  const api = "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"

  const allData = async () => {
    const data = await axios.get(api)
      .then((res) => {
        // console.log("data", res.data.user);
        setState(res.data.user)
      })
  }

  useEffect(() => {
    allData()
  },[])



  return (
    <div className=''>

      {/* <div className='absolute top-0 bg-transparent cursor-poinr left-0 '>
        <img className=' lg:h-[600px] md:h-[500px] sm:h-[400px] vsm:h-[300px] h-[200px]  sm:block hidden '
          src="https://uploads-ssl.webflow.com/63c6b6a8e34f347803dc4c5a/63d279fb46be2a0d42ddba36_Lights%20(7)%20(1).png"
          alt="" />
      </div> */}

      {/* <div className='text-white text-5xl font-interV  flex justify-center items-center  pt-10 '>
        <p className='max-w-[700px] text-center '>John Doe</p>
      </div> */}

      <div className=' flex  justify-center items-center h-screen relative' id='home'>
        <div className=' rounded-full w-[480px] h-[480px] overflow-hidden border border-[#0b011d]'>
          <img className='w-full h-full  object-cover' src={state.about?.avatar.url} alt="" />
        </div>

        <div className='absolute text-white text-5xl font-interV  flex justify-center items-center  pt-10 z-50'>
            <p className='max-w-[700px] text-center text-white '>I develop 3D visuals, user interfaces and web applications</p>
        </div>

      </div>

    </div>
  )
}

export default Hero