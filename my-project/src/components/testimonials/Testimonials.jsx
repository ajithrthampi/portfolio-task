import React, { useContext, useEffect, useState } from 'react'
import square1 from "../../assets/images/square/square1.png"
import squareShadow1 from "../../assets/images/square/squareShadow1.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import "../testimonials/testimonials.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ApiContext } from '../../context/ApiContext';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    const {state} = useContext(ApiContext)

    useEffect(() => {
        if(state){
            setTestimonials(state.testimonials)
        }
    },[state])

    const [currentSlide, setCurrentSlide] = useState(0);


    return (
        <div className='h-full  timeline-containe   '  id='testimonial'>
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
                     sm:text-[70px] vsm:text-[40px] text-[40px]  font-inter fontManrope-bold font-medium '>Testimonials</h2>
                </div>
                <section className='md:pt-16 text-white flex   justify-center'>
                    <div className='max-w4xl w-full  overflow-hidde relative' >

                        <div className=" pt-20 ">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter :true
                                }}
                                navigation={false}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"

                                breakpoints={{
                                    // when window width is >= 640px
                                    100: {
                                        slidesPerView: 1,
                                        // navigation:true
                                    },
                                    640: {
                                        slidesPerView: 1,
                                    },
                                    // when window width is >= 768px
                                    768: {
                                        slidesPerView: 2,
                                    },

                                }}
                            >
                                {
                                    testimonials.map((testimonial, index) => (

                                        <SwiperSlide className='' key={index}>
                                            <div className=''>

                                            <div className='rounded-xl overflow-hidden testimonial-container  md:p-9 p-5  group-hover:blur hover:!blur-none group-hover:scale-[0.85] hover:!scale-100' style={{ border: " 1px solid rgb(48, 45, 56)" }}>
                                                <p className='bg-clip-text bg-gradient-to-br from-white via-[#dddbe0] to-[#bbb8c0] text-transparent fontManrope-regular leading-[29px] tracking-wide md:text-lg text-sm'>
                                                    {testimonial.review}
                                                </p>
                                                <div className='w-full '>
                                                    <div className='flex items-center'>
                                                        <div className='w-full flex gap-4 mt-10 items-center'>
                                                            <img className='w-14 h-14 rounded-full border object-cover' src={testimonial.image.url} alt="" />
                                                            <div className='flex w-full gap-1'>
                                                                <div>
                                                                    <h3 className='bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent fontManrope-medium text-2xl'>{testimonial.name}</h3>
                                                                    <p className='text-sm fontManrope-medium text-[#938aa8] tracking-wider'>{testimonial.position}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Testimonials