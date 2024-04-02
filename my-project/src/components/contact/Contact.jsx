import React, { useContext, useEffect, useState } from 'react'
import square1 from "../../assets/images/square/square1.png"
import squareShadow1 from "../../assets/images/square/squareShadow1.png"
import "../contact/contact.css"
import { GoArrowUpRight } from "react-icons/go";
import { ApiContext } from '../../context/ApiContext';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    const { state } = useContext(ApiContext)
    const [name, setName] = useState("")
    const [social, setSocial] = useState([])
    useEffect(() => {
        if (state) {
            setName(state?.about?.name)
            setSocial(state?.social_handles)
        }
    }, [state])

    console.log("state", state);
    console.log("social", social);


    return (
        <div className='h-full  contact-containe overflow-hidden' id="contact">
            <hr className="h-[1.5px] bg-gray-900 bg-gradient-to-r from-[#0b011d] via-[#372c4b] to-[#0b011d]  border-0 " />
            <div className='xl:px-[150px] md:px-[40px]  sm:px-[30px] vsm:px-[12px] px-[7px] md:py-28 py-16 '>
                <div className=''>
                    <div className='relative top28  left-0 right-0 bottom-0 w-[100%] h-auto  xl:max-w-[1128px] lg:max-w-[1000px] md:max-w-  mr-auto ml-auto  '>
                        <div className='absolute sm:top-28 top-10'>
                            <img className='md:w-full sm:w-20 w-16 '
                                src={square1}
                                alt="" />
                            <div className='absolute top-0'>
                                <img src={squareShadow1}
                                    alt="" />
                            </div>
                        </div>
                        <div className='absolute  right-0 transform -rotate-90'>
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
                    <h2 className='bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent md:text-[70px]
             sm:text-[70px] vsm:text-[40px] text-[40px]  font-inter fontManrope-bold font-medium '>Contact</h2>
                </div>
                <section className='md:pt-20 pt-10 text-white flex slg:flex-row flex-col  lg:gap-20 gap-10  justify-center'>
                    <div className='slg:w-[40%]'>
                        <p className='fontManrope-medium md:text-3xl text-lg'>SEND ME A MESSAGE</p>
                        <p className=' pt-5 bg-clip-text bg-gradient-to-br from-white via-[#dddbe0] to-[#bbb8c0] text-transparent fontManrope-regular leading-[29px] tracking-wide md:text-base text-sm'>
                            Have a specific inquiry or message for us? Please use the contact form below, and we'll get back to you promptly.
                        </p>
                    </div>
                    <div className='slg:w-[60%] '>
                        <form action=" " className='flex flex-col md:gap-10 gap-7'>
                            <div className='flex sm:flex-row flex-col justify-between sm:gap-10 gap-6'>
                                <div className='flex flex-col md:gap-2 w-full'>
                                    <label className='  text-[#ffffff] fontManrope-regular leading-[29px] tracking-wide  md:text-sm text-xs' htmlFor="">First Name</label>
                                    <input placeholder='First Name' className=' placeholder:uppercase fontManrope-thin md:text-base text-sm tracking-wider border-b border-[#302D38] pt-3 outline-none bg-transparent bg-clip-text bg-gradient-to-br py-2 from-white via-[#dddbe0] to-[#bbb8c0] text-transparent'

                                        type="text" />
                                </div>
                                <div className='flex flex-col md:gap-2 w-full'>
                                    <label className='  text-[#ffffff] fontManrope-regular leading-[29px] tracking-wide  md:text-sm text-xs' htmlFor="">Last Name</label>
                                    <input placeholder='Last Name' className=' placeholder:uppercase fontManrope-thin md:text-base text-sm tracking-wider border-b border-[#302D38] pt-3 outline-none bg-transparent bg-clip-text bg-gradient-to-br py-2 from-white via-[#dddbe0] to-[#bbb8c0] text-transparent'

                                        type="text" />
                                </div>
                            </div>

                            <div className='flex sm:flex-row flex-col justify-between sm:gap-10 gap-6'>
                                <div className='flex flex-col md:gap-2 w-full'>
                                    <label className='  text-[#ffffff]  fontManrope-regular leading-[29px] tracking-wide  md:text-sm text-xs' htmlFor="">Email</label>
                                    <input placeholder='Email Address' className=' placeholder:uppercase fontManrope-thin md:text-base text-sm  tracking-wider border-b border-[#302D38] pt-3 outline-none bg-transparent bg-clip-text bg-gradient-to-br py-2 from-white via-[#dddbe0] to-[#bbb8c0] text-transparent'

                                        type="text" />
                                </div>
                                <div className='flex flex-col md:gap-2 w-full'>
                                    <label className='text-[#ffffff]  fontManrope-regular leading-[29px] tracking-wide  md:text-sm text-xs' htmlFor="">Phone Number</label>
                                    <input placeholder='Phone Number' className=' placeholder:uppercase fontManrope-thin md:text-base text-sm  tracking-wider border-b border-[#302D38] pt-3 outline-none bg-transparent bg-clip-text bg-gradient-to-br py-2 from-white via-[#dddbe0] to-[#bbb8c0] text-transparent' type="text" />
                                </div>
                            </div>

                            <div className='flex justify-between gap-10'>
                                <div className='flex flex-col md:gap-2 w-full'>
                                    <label className=' text-[#ffffff]  fontManrope-regular leading-[29px] tracking-wide  md:text-sm text-xs' htmlFor="">Your Message</label>

                                    <input
                                        placeholder='Message'
                                        className=' placeholder:uppercase fontManrope-thin  md:text-base text-sm tracking-wider border-b border-[#302D38] pt-3 outline-none bg-transparent bg-clip-text bg-gradient-to-br py-2 from-white via-[#dddbe0] to-[#bbb8c0] text-transparent'
                                        type="text" />

                                </div>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <h2 className='bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent md:text-[40px]
             sm:text-[30px] vsm:text-[20px] text-[20px]  font-inter fontManrope-bold font-medium '>
                                    SEND MESSAGE
                                </h2>
                                <button className='w-24 bg-gradient-to-b group  from-purple-800  to-transparent py-3 text-white  md:text-sm text-xs  fontManrope-medium bg-[#150b26 rounded-full flex items-center justify-center gap-1  ' style={{ border: " 1px solid rgb(48, 45, 56)" }}>
                                    <span className='group-hover:rotate-45 transition-all duration-500'>

                                        <GoArrowUpRight size={27} />
                                    </span>

                                </button>
                            </div>

                        </form>
                    </div>
                </section>
            </div>

            <div className='pb-32 xl:px-[150px] md:px-[40px]  sm:px-[30px] vsm:px-[12px] px-[7px]'>
                <hr className="h-[1.5px] bg-gray-900 bg-gradient-to-r from-[#0b011d] via-[#372c4b] to-[#0b011d]  border-0 " />
                <div className='flex justify-between items-center pt-5'>
                    <p className='text-[#AFB0B6] fontManrope-thin text-sm  tracking-wide leading-6 pt-5'>
                        © 2023 {name}. All rights reserved.
                    </p>
                        <div className='flex text-2xl gap-2'>
                    {social && social.map((item, index) => (
                            <a href={item.url}>
                                <button className=' text-white flex justify-center items-center hover:scale-105 '>
                                    <img className='w-8 h-8 rounded-full border-[1.97px] p-[1px] ' src={item.image.url} alt="" />
                                </button>
                            </a>
                           
                            ))}
                        </div>

                </div>

            </div>

        </div>
    )
}

export default Contact