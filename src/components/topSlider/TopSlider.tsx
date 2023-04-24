import React, { FC, useEffect, useState } from 'react'
import './TopSlider.scss'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper'
import { TopFilms } from '../../data/topFilms'
import type { Swiper as AS } from 'swiper';

interface TopSlider {
    topFilms: TopFilms[]
}

const TopSlider: FC<TopSlider> = ({ topFilms }) => {
    // const swiper = useSwiper();
    // console.log(swiper)
    // const [swiperInstance, setSwiperInstance] = useState<AS | null>(null)

    // console.log(swiperInstance?.slideNext())

    // useEffect(() => {
    //     console.log("AAAA")
    // }, [swiperInstance])


    return (
        // <div>

            <Swiper
                // onSwiper={(swiper) => setSwiperInstance(swiper)}
                modules={[Navigation]}
                spaceBetween={10}
                navigation={true}
                className='topSlider'
                breakpoints={{
                    330: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 20,
                    },
                    450: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 20,
                    },
                    600: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 20,
                    },
                    880: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 24,

                    },
                    1160: {
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                        spaceBetween: 20,
                    },
                }}
            >
                {topFilms.map((film) => (
                        <SwiperSlide key={film.link}>
                            <Link className='posterUrl' to={film.link}>
                                <div className='posterUprightBlock__nbl-poster'>
                                    <div className='poster__imageWrapper'>
                                        <img className='poster__image' src={film.img} />
                                        <div className='poster__imageFade'></div>
                                        <div className='poster__imageLogoArea'>
                                            <img className='poster__imageLogo' src={film.title} />
                                        </div>
                                        <div className='poster__placeNumber'>
                                            <img className='poster__picture-number' src={film.number} />
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </SwiperSlide>
                ))}
            </Swiper>
        //     <button onClick={() => swiperInstance?.slidePrev()} className=" test">prev </button>

        //     <button onClick={() => swiperInstance?.slideNext()} className=" test">next</button>
        // </div>
    )
}

export default TopSlider