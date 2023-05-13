import React, { FC, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
// import { IFilm } from "../../types/IFilm";
import { TbFlag3 } from 'react-icons/tb';
import './MoviesSlider.scss'
import '../recommendSwiper/recommendSwiper.scss'
import { moviesAPI } from "../../services/MoviesService";
import { IMovie } from "../../types/IMovies";
import { Link } from "react-router-dom";
import SlimPoster from "../slimPoster/SlimPoster";

interface MoviesSliderProps {
    url: string,
    genres: string
}

const MoviesSlider: FC<MoviesSliderProps> = ({ url, genres }) => {
    const movies = moviesAPI.useGetMoviesForSlider1Query(url).data?.rows
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            navigation={true}
            className='topSlider'
            breakpoints={{
                310: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                },
                540: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                },
                600: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                },
                700: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 20,
                },
                880: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                    spaceBetween: 20,
                },
                1097: {
                    slidesPerView: 6,
                    slidesPerGroup: 6,
                    spaceBetween: 20,

                },
                1271: {
                    slidesPerView: 7,
                    slidesPerGroup: 7,
                    spaceBetween: 20,
                },
            }}
        >
            {movies?.map((movie, index) =>
                index !== movies.length - 1 ? (
                    <SwiperSlide key={movie.id}>
                        <SlimPoster movie={movie} />
                    </SwiperSlide>
                ) : (
                    <SwiperSlide key={movie.id}>
                        <div className="recommendSwiper">
                            <Link to={`/movies/${genres}`}>
                                <li className="recommendSwiper__swiper-item">
                                    <div className="swiperItem__container">
                                        <div className="swiperItem__container-imageWrapper">
                                            <div className="moreTile__captionWrapper">
                                                <div className="moreTile__caption">Посмотреть все</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        </div>
                    </SwiperSlide>
                )
            )}
        </Swiper>
    )
}

export default MoviesSlider