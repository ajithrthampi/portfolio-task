import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../context/ApiContext'

const Projects = () => {
    const { state } = useContext(ApiContext)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        if (state && state) {
            setProjects(state?.projects)
        }
    }, [state])


    const truncateText = (text, wordsCount) => {
        const words = text.split(' ');
        if (words.length > wordsCount) {
            return words.slice(0, wordsCount).join(' ') + '...';
        }
        return text;
    };

    console.log(projects);
    return (
        <div className='h-full   '>
            <hr className="h-[1.5px] bg-gray-900 bg-gradient-to-r from-[#0b011d] via-[#372c4b] to-[#0b011d]  border-0 " />
            <div className='xl:px-[150px] md:px-[40px]  sm:px-[30px] vsm:px-[12px] px-[7px] md:py-28 py-16 '>
                <div className='flex flex-col  justify-center items-center '>
                    <h2 className='bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent md:text-[70px] sm:text-[70px] 
            vsm:text-[40px] text-[40px]  font-inter fontManrope-bold font-medium '>
                        Projects
                    </h2>
                </div>

                <div className='pt-20  text-white'>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-14 px-1">
                        {
                            projects && projects.map((item, index) => (
                                <div key={index}>
                                    {
                                        index % 2 === 0 && (
                                            <div className="grid gap-4 cursor-pointer">
                                                <div className='lg:p-14 md:p-7 sm:px-6 sm:py-5 px-5 py-4 rounded-2xl h-full  ' style={{ border: " 1px solid rgb(48, 45, 56)" }}   >
                                                    <img className=" rounded-xl  " src={item?.image.url} alt="" />
                                                </div>
                                                <p className='bg-clip-text  bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] md:text-2xl text-base fontManrope-medium tracking-wider'>{item.title}</p>
                                                <div
                                                    dangerouslySetInnerHTML={{ __html: truncateText(item.description || '', 15) }}
                                                    className='text-[#b5abcb] fontManrope-regular text-sm  tracking-wide leading-6 max-w-[500px] -mt-1 '
                                                />
                                            </div>

                                        )
                                    }
                                    {
                                        index % 2 === 1 && (
                                            <div className="grid gap-4 md:pt-10 cursor-pointer">
                                                <div className='lg:p-14 md:p-7 sm:px-6 sm:py-5 px-5 py-4 rounded-2xl h-full  ' style={{ border: " 1px solid rgb(48, 45, 56)" }}   >
                                                    <img className=" rounded-xl  " src={item?.image.url} alt="" />
                                                </div>
                                                <p className='bg-clip-text  bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] md:text-2xl text-base fontManrope-medium tracking-wider'>{item.title}</p>
                                                <div
                                                    dangerouslySetInnerHTML={{ __html: truncateText(item.description || '', 15) }}
                                                    className='text-[#b5abcb] fontManrope-regular text-sm  tracking-wide leading-6 max-w-[500px] -mt-1  '
                                                />
                                            </div>


                                        )}

                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects