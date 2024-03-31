import React, { useContext } from 'react'
import square1 from "../../assets/images/square/square1.png"
import squareShadow1 from "../../assets/images/square/squareShadow1.png"
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { PiStarFourFill } from "react-icons/pi";
import Star from "../../assets/images/icons/Star.png"
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ApiContext } from '../../context/ApiContext';
import "./about.css"



const About = () => {
    const { state } = useContext(ApiContext)
    // console.log("state..........", state);

    return (
        <div className='h-full  '>
            <hr className="h-[1.5px] bg-gray-900 bg-gradient-to-r from-[#0b011d] via-[#372c4b] to-[#0b011d]  border-0 " />
            <div className='xl:px-[150px] md:px-[40px]  sm:px-[30px] vsm:px-[12px] px-[7px] md:py-28 py-16 '>

                <div className=''>
                    <div className='relative top28  left-0 right-0 bottom-0 w-[100%] h-auto  xl:max-w-[1128px] lg:max-w-[1000px] md:max-w-  mr-auto ml-auto  '>
                        <div className='absolute '>
                            <img className='md:w-full sm:w-20 w-16 '
                                src={square1}
                                alt="" />
                            <div className='absolute top-0'>
                                <img src={squareShadow1}
                                    alt="" />
                            </div>
                        </div>
                        <div className='absolute    sm:top-20 top-10 right-0 transform -rotate-90'>
                            <img className='md:w-full sm:w-20 w-16'
                                src={square1}
                                alt="" />
                            <div className='absolute top-0'>
                                <img src={squareShadow1}
                                    alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col  justify-center items-center '>
                    <h2 className='bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent md:text-[70px] sm:text-[70px] vsm:text-[40px] text-[40px]  font-inter fontManrope-bold font-medium '>About</h2>
                </div>

                <div className='md:pt-24 pt-12 '>
                    <div className=' flex sm:flex-row flex-col justify-between sm:items-center gap-6'>
                        <p className='text-white   lg:text-4xl md:text-2xl sm:text-xl uppercase fontManrope-semibold'>I AM {state?.about?.name} </p>
                        {/* <button class="gradient-button">Click me</button> */}
                        <button className='w-36 bg-gradient-to-b  from-purple-800 to-transparent py-4 text-white  md:text-sm text-xs  fontManrope-medium bg-[#150b26 rounded-lg flex items-center justify-center gap-1  ' style={{ border: " 1px solid rgb(48, 45, 56)" }}>Know More <LiaLongArrowAltRightSolid size={16} /></button>
                    </div>
                    <hr className="h-[1.5px] md:mt-12 mt-6 bg-gray-900/90  border-0 " />


                    <section className='md:pt-14 pt-10 flex lg:flex-row flex-col  items-center justify-center gap-6 ' >
                        <div className='pt2 w-full'>
                            <img className='lg:w-[550px w-full rounded-2xl sm:h-[520px] h-[400px] object-cover' src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k" alt="" />
                        </div>
                        <div className='xl: w-full  '>
                            <div className='rounded-t-2xl md:p-8 p-5 text-white border-t border-r border-l border-b border-[#302D38]'>
                                <div>
                                    <div className='flex items-center gap-3'>
                                        <img className='h-[30px]' src={Star} alt="" />
                                        <p className='md:text-xl text-base fontManrope-regular tracking-wider'>Introduction</p>
                                    </div>
                                    <p className='text-[#AFB0B6] fontManrope-thin text-sm  tracking-wide leading-6 pt-5'>My journey as a photographer has been a lifelong quest to capture the extraordinary in the
                                        {state.about?.description}
                                    </p>
                                </div>
                            </div>
                            <div className='rounded-b-2xl md:p-8 p-5 text-white  border-r border-l border-b border-[#302D38]'>
                                <div>
                                    <div className='flex items-center gap-3'>
                                        <img className='h-[30px]' src={Star} alt="" />
                                        <p className='md:text-xl text-base fontManrope-regular tracking-wider'>Contact Information</p>
                                    </div>
                                    <div className='flex md:flex-row flex-col justify-start md:gap-20 gap-2'>
                                        <div className='pt-5 flex flex-col gap-2'>
                                            <label className='fontManrope-regular text-[13px]' htmlFor="">Email</label>
                                            <p className='fontManrope-regular text-sm text-[#AFB0B6]'>{state?.email}</p>
                                        </div>
                                        <div className='pt-5 flex flex-col gap-2'>
                                            <label className='fontManrope-regular text-[13px]' htmlFor="">Phone Number</label>
                                            <p className='fontManrope-regular text-sm text-[#AFB0B6]'>{state?.about?.phoneNumber}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='pt-10 flex sm:flex-row flex-col sm:items-center gap-3  '>
                                    <div className=' p-2 border border-[#302D38] rounded-full flex gap-2 sm:w-full w-36'>
                                        <button className='w-10 h-10 rounded-full border border-[#302D38] flex justify-center items-center bg-[#1a0f2e]'><a href=""><FaFacebook /></a></button>
                                        <button className='w-10 h-10 rounded-full border border-[#302D38] flex justify-center items-center bg-[#1a0f2e]'><a href=""><FaTwitter /></a></button>
                                        <button className='w-10 h-10 rounded-full border border-[#302D38] flex justify-center items-center bg-[#1a0f2e]'><a href=""><FaLinkedin /></a></button>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        {/* <button className='w-36 py-4 text-white text-sm fontManrope-medium bg-[#150b26] rounded-lg flex items-center justify-center gap-1  ' style={{ border: " 1px solid rgb(48, 45, 56)" }}>Lets Work </button> */}
                                        <button className='w-36 bg-gradient-to-b  from-purple-800 to-transparent py-4 text-white  md:text-sm text-xs  fontManrope-medium bg-[#150b26 rounded-lg flex items-center justify-center gap-1 ' style={{ border: " 1px solid rgb(48, 45, 56)" }}>Download CV </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About