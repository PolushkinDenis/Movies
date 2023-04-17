import React, { FC, useEffect, useState } from "react";
import './NewMoviesSlider.scss'
import premieres_img from '../../images/newMoviesSlider/premieres.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrNext } from "react-icons/gr";


const newFilmsData = [
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img } },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img } },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img } },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img } },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img } },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img } },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img } },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img } },
]

const NewMoviesSlider: FC = () => {
    return (
        <div className="slick-slider">
            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                spaceBetween={10}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    395: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        // spaceBetween: 5,
                    },
                    745: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        // spaceBetween: 10,
                    },
                    920: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        // spaceBetween: 5,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
               <SwiperSlide>
                    <div className="slick-track">
                        <a className="slick__link" href="https://www.ivi.ru/collections/new-movies">
                            <div className="slick-slide">
                                <div className="nbl-poster">
                                    <img className="nbl-poster__image" src={premieres_img} />
                                </div>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slick-track">
                        <a className="slick__link" href="https://www.ivi.ru/collections/new-movies">
                            <div className="slick-slide">
                                <div className="nbl-poster">
                                    <img className="nbl-poster__image" src={premieres_img} />
                                </div>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slick-track">
                        <a className="slick__link" href="https://www.ivi.ru/collections/new-movies">
                            <div className="slick-slide">
                                <div className="nbl-poster">
                                    <img className="nbl-poster__image" src={premieres_img} />
                                </div>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slick-track">
                        <a className="slick__link" href="https://www.ivi.ru/collections/new-movies">
                            <div className="slick-slide">
                                <div className="nbl-poster">
                                    <img className="nbl-poster__image" src={premieres_img} />
                                </div>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slick-track">
                        <a className="slick__link" href="https://www.ivi.ru/collections/new-movies">
                            <div className="slick-slide">
                                <div className="nbl-poster">
                                    <img className="nbl-poster__image" src={premieres_img} />
                                </div>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slick-track">
                        <a className="slick__link" href="https://www.ivi.ru/collections/new-movies">
                            <div className="slick-slide">
                                <div className="nbl-poster">
                                    <img className="nbl-poster__image" src={premieres_img} />
                                </div>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slick-track">
                        <a className="slick__link" href="https://www.ivi.ru/collections/new-movies">
                            <div className="slick-slide">
                                <div className="nbl-poster">
                                    <img className="nbl-poster__image" src={premieres_img} />
                                </div>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slick-track">
                        <a className="slick__link" href="https://www.ivi.ru/collections/new-movies">
                            <div className="slick-slide">
                                <div className="nbl-poster">
                                    <img className="nbl-poster__image" src={premieres_img} />
                                </div>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>

            </Swiper>
            {/* <Swiper navigation={true} modules={[Navigation]} className="slick-list">
                

                <SwiperSlide>
                    <div className="slick-track">
                        <a className="slick__link" href="https://www.ivi.ru/collections/new-movies">
                            <div className="slick-slide">
                                <div className="nbl-poster">
                                    <img className="nbl-poster__image" src={premieres_img} />
                                </div>
                            </div>
                        </a>
                        <a className="slick__link" href="https://www.ivi.ru/collections/new-movies">
                            <div className="slick-slide">
                                <div className="nbl-poster">
                                    <img className="nbl-poster__image" src={premieres_img} />
                                </div>
                            </div>
                        </a>
                        <a className="slick__link" href="https://www.ivi.ru/collections/new-movies">
                            <div className="slick-slide">
                                <div className="nbl-poster">
                                    <img className="nbl-poster__image" src={premieres_img} />
                                </div>
                            </div>
                        </a>
                        <a className="slick__link" href="https://www.ivi.ru/collections/new-movies">
                            <div className="slick-slide">
                                <div className="nbl-poster">
                                    <img className="nbl-poster__image" src={premieres_img} />
                                </div>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div  className="slick-track">
                        <a className="slick__link" href="https://www.ivi.ru/collections/new-movies">
                            <div className="slick-slide">
                                <div className="nbl-poster">
                                    <img className="nbl-poster__image" src={premieres_img} />
                                </div>
                            </div>
                        </a>
                        <a className="slick__link" href="https://www.ivi.ru/collections/new-movies">
                            <div className="slick-slide">
                                <div className="nbl-poster">
                                    <img className="nbl-poster__image" src={premieres_img} />
                                </div>
                            </div>
                        </a>
                        <a className="slick__link" href="https://www.ivi.ru/collections/new-movies">
                            <div className="slick-slide">
                                <div className="nbl-poster">
                                    <img className="nbl-poster__image" src={premieres_img} />
                                </div>
                            </div>
                        </a>
                        <a className="slick__link" href="https://www.ivi.ru/collections/new-movies">
                            <div className="slick-slide">
                                <div className="nbl-poster">
                                    <img className="nbl-poster__image" src={premieres_img} />
                                </div>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper> */}

        </div>
    )
}

export default NewMoviesSlider