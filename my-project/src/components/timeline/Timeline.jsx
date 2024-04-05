import React, { useContext, useEffect, useRef, useState } from 'react'
import square1 from "../../assets/images/square/square1.png"
import squareShadow1 from "../../assets/images/square/squareShadow1.png"
import "../timeline/timeline.css"
import { ApiContext } from '../../context/ApiContext'
import { BiMinus, BiPlus } from "react-icons/bi";


const Timeline = () => {
    const { state } = useContext(ApiContext)
    const [show, setShow] = useState(false)
    const [timeLine, setTimeLine] = useState([])
    const [educationData, setEducationData] = useState([]);
    const [nonEducationData, setNonEducationData] = useState([]);
    const contentRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(0);
    const [openIndex2, setOpenIndex2] = useState(null);

    useEffect(() => {
        if (state) {
            setTimeLine(state?.timeline)
        }
    }, [state])

    const handleOpen = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    const handleOpenExperience = (index) => {
        setOpenIndex2(index === openIndex2 ? null : index);
    }


    const getContentHeight = (ref) => {
        if (ref.current) {
            return ref.current.scrollHeight + 250;
        }
        return 0;
    };

    // filtering data
    useEffect(() => {
        // Filter data based on forEducation field
        const educationFilteredData = timeLine.filter(item => item.forEducation === true);
        const nonEducationFilteredData = timeLine.filter(item => item.forEducation === false);
        // Set filtered data to respective states
        setEducationData(educationFilteredData);
        setNonEducationData(nonEducationFilteredData);
    }, [timeLine]);

    return (
        <div className='h-full  timeline-container'  id='timeline'>
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
                    <h2 className='bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent md:text-[70px]
                     sm:text-[70px] vsm:text-[40px] text-[40px]  font-inter fontManrope-bold font-medium '>Timeline</h2>
                </div>

                <section className='md:pt-16     text-white'>
                    <div className=' pt-20 flex justify-around'>
                        <div>
                            <p className='bg-clip-text  bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] md:text-3xl text-lg fontManrope-medium tracking-wider'>Education</p>
                        </div>
                        <div className='md:block hidden'>
                            <p className='bg-clip-text  bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] md:text-3xl text-lg fontManrope-medium tracking-wider'>Experience</p>
                        </div>
                    </div>
                    <hr className='mt-5 h-[1px]' />
                    <div className='flex md:flex-row flex-col'>
                        <div className='md:w-[50%]  '>
                            {educationData &&
                                educationData.map((item, index) => (
                                    <div className={`md:pt-8  pt-5 md:ml-10 ml-5 md:mr-0 mr-5  cursor-pointer  ${index === 0 ? "" : "border-r  "} `} onClick={() => handleOpen(index)} key={index}>
                                        <div className=''>
                                            <p className='text-white md:text-xl text-base fontManrope-medium'>{item.company_name}</p>
                                        </div>
                                        <div
                                            ref={contentRef}
                                            className={`transition-all md:pr-5 pr-1 duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-auto' : 'max-h-0'
                                                }`}
                                            style={{ maxHeight: openIndex === index ? getContentHeight(contentRef) + 'px' : '0' }}
                                        >
                                            <div className='md:pt-10 pt-7 flex md:flex-row flex-col md:gap-0 gap-3 md:items-center justify-between   fontManrope-Regular'>
                                                <p className='text-white md:text-xl text-lg'>{item.jobTitle}</p>
                                                <p className='text-white text-base flex md:flex-row flex-col'>{new Date(item.endDate).toDateString()} , <span className='md:pt-0 pt-5'> {item.jobLocation}</span> </p>
                                            </div>
                                            <div>
                                                <p className='fontManrope-thin text-sm pt-6 tracking-wider'>{item.summary}</p>
                                            </div>
                                            <ul className='list-[circle] pt-6 px-4 flex flex-col gap-2 text-sm fontManrope-thin'>
                                                {
                                                    item?.bulletPoints.map((points, i) => (
                                                        <div key={i}>
                                                            <li className=''>{points}</li>
                                                        </div>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className='relative'>
                                            <div className={`w-full h-[1.5px] bg-white text-white ${openIndex === index ? 'mt-16' : 'md:mt-8 mt-5'}`}></div>
                                            <div className='absolute -top-6 -right-[26px] rounded-full bg-[#0b011d] w-12 h-12 border-2 flex justify-center items-center border-white'>
                                                {
                                                    openIndex === index ?
                                                        <>
                                                            <BiMinus size={23} />
                                                        </>
                                                        :
                                                        <>
                                                            <BiPlus size={23} />

                                                        </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className='flex flex-col items-center gap-10 justify-center pt-10 md:hidden'>
                            <p className='bg-clip-text  bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] md:text-3xl text-lg fontManrope-medium tracking-wider'>Experience</p>
                            <div className='w-full pr-10'>
                                <div className={`w-full h-[1.5px] bg-white text-white md:ml-10 ml-5 md:mr-0 mr-5  '}`}></div>
                            </div>
                        </div>
                        <div className='md:w-[50%]'>
                            {nonEducationData &&
                                nonEducationData.map((item, index) => (
                                    <div className={`md:pt-8  pt-5 md:ml-16 ml-5 md:mr-0 mr-5 cursor-pointer  ${index === 0 ? "" : "border-r  "} `} onClick={() => handleOpenExperience(index)} key={index}>
                                        <div className=''>
                                            <p className='text-white md:text-xl text-base fontManrope-medium'>{item.company_name}</p>
                                        </div>
                                        <div
                                            ref={contentRef}
                                            className={`transition-all md:pr-5 pr-1 duration-500 ease-in-out overflow-hidden ${openIndex2 === index ? 'max-h-auto' : 'max-h-0'
                                                }`}
                                            style={{ maxHeight: openIndex2 === index ? getContentHeight(contentRef) + 'px' : '0' }}
                                        >
                                            <div className='md:pt-10 pt-7 flex md:flex-row flex-col md:gap-0 gap-3 md:items-center justify-between   fontManrope-Regular'>
                                                <p className='text-white md:text-xl text-lg'>{item.jobTitle}</p>
                                                <p className='text-white text-base flex md:flex-row flex-col'>{new Date(item.endDate).toDateString()}  ,<span className='md:pt-0 pt-5 '>{item.jobLocation}</span> </p>
                                            </div>
                                            <div>
                                                <p className='fontManrope-thin text-sm pt-6 tracking-wider'>{item.summary}</p>
                                            </div>
                                            <ul className='list-[circle] pt-6 px-4 flex flex-col gap-2 text-sm fontManrope-thin'>
                                                {
                                                    item?.bulletPoints.map((points, i) => (
                                                        <div key={i}>
                                                            <li className=''>{points}</li>
                                                        </div>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className='relative'>
                                            <div className={`w-full h-[1.5px] bg-white text-white ${openIndex2 === index ? 'mt-16' : 'md:mt-8 mt-5'}`}></div>
                                            <div className='absolute -top-6 -right-[26px] rounded-full bg-[#0b011d] w-12 h-12 border-2 flex justify-center items-center border-white'>
                                                {
                                                    openIndex2 === index ?
                                                        <>
                                                            <BiMinus size={23} />
                                                        </>
                                                        :
                                                        <>
                                                            <BiPlus size={23} />

                                                        </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Timeline