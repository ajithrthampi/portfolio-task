import React, { useContext, useEffect, useState } from 'react'
import square1 from "../assets/images/square/square1.png"
import squareShadow1 from "../assets/images/square/squareShadow1.png"
import { ApiContext } from '../context/ApiContext'

const Services = () => {
    const [show, setShow] = useState(false)
    const [disableHoverEvents, setDisableHoverEvents] = useState(false);
    const { state } = useContext(ApiContext)
    const [services, setServices] = useState([])

    useEffect(() => {
        if (state.services) {
            setServices(state.services);
        }
    }, [state.services]);

    // console.log("service111111111111111111", services);

    const handleMouseEnter = () => {
        if (!disableHoverEvents) {
            setShow(!show)
            console.log("Enter");
        }
    }

    const handleMouseLeave = () => {
        if (!disableHoverEvents) {
            setShow(!show)
            console.log("Leave");
        }
    }

    const handleFlip = () => {
        setShow(!show)
    }

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
                    <h2 className='bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent md:text-[70px] sm:text-[70px] 
                    vsm:text-[40px] text-[40px]  font-inter fontManrope-bold font-medium '>
                        Services
                    </h2>
                </div>
                <div className="grid xl:grid-cols-3 md:grid-cols-2   sm:grid-cols-2  grid-rows-2  gap-3 pt-20 text-white ">
                    {
                        services.map((item, index) => (
                            <div className='rounded-xl xl:h-[400px] h-[300px]' key={index}>
                                <div className='group w-full h-full [perspective:1000px]'>
                                    <div className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]   `}
                                        style={{ border: " 1px solid rgb(48, 45, 56)" }}>
                                        <div className='absolute inset-0 ' >
                                            <div className='rounded-xl xl:h-[400px] h-[300px] w-full relative'
                                                style={{ border: " 1px solid rgb(48, 45, 56)" }}>
                                                <div className='flex justify-center items-center h-full w-full'>
                                                    <h4 className='font-medium xl:text-2xl text-xl fontManrope-medium   text-center pt-44 w-[200px p-'>
                                                        {item?.name}
                                                    </h4>
                                                </div>
                                                <img className='absolute md:w-56 sm:w-44 w-52 max-h-44 left-0 right-0 m-auto xl:top-12 top-8'
                                                    src={item?.image?.url}
                                                    alt="" />
                                                {/* <img className='absolute  left-0 right-0 m-auto bottom-0 '
                                            src={proto2}
                                            alt=""/>
                                        <img className='absolute  left-0 right-0 m-auto bottom-0 '
                                            src={proto3}
                                            alt=""/> */}
                                            </div>
                                        </div>
                                        <div className='absolute inset-0 h-full w-full rounded-xl bg-[#0b011d] sm:px-8 p-5 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                            <p className='text-[#776d89 text-white md:text-base text-sm fontManrope-medium  pt-2 leading-tig flex justify-center items-center h-full '>
                                                {item?.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Services