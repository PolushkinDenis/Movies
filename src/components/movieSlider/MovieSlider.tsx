import React, { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
// import { IFilm } from "../../types/IFilm";
import { TbFlag3 } from 'react-icons/tb';
import './MoviesSlider.scss'
import '../recommendSwiper/recommendSwiper.scss'
import { moviesAPI } from "../../services/MoviesService";

interface MoviesSliderProps {
    url: string
}

const formatFilmLength = (filmLength: string) => {
    const filmLengthSplite = filmLength.split("")
    const lastSymbol = filmLengthSplite[filmLengthSplite.length - 1]
    if (lastSymbol === "1") {
        return "минута"
    }
    else if (lastSymbol === "2" || lastSymbol === "3" || lastSymbol === "4") {
        return "минуты"
    }
    else if (lastSymbol === "0" || lastSymbol === "5" || lastSymbol === "6" ||
        lastSymbol === "7" || lastSymbol === "8" || lastSymbol === "9") {
        return "минут"
    }

}

const MoviesSlider: FC<MoviesSliderProps> = ({ url }) => {
    const movies = moviesAPI.useGetMoviesForSlider1Query(url).data?.rows
    console.log(movies)

    return (
        <Swiper
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
                800: {
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
            {movies?.map((movie) => (
                <SwiperSlide key={movie.id}>
                    <div className="recommendSwiper">
                        <li className="recommendSwiper__swiper-item">
                            <div className="swiperItem__container">
                                <div className="swiperItem__container-imageWrapper">
                                    <img
                                        className="swiperItem__container-image"
                                        src={movie.posterUrlPreview}
                                        alt="film"
                                    />
                                </div>

                                <div className="swiperItem__container-properties">
                                    <TbFlag3 />
                                    <div className="swiperItem__container-properties-info">
                                        <div className="propertiesInfo__container">
                                            <div className="propertiesInfo__container-rating">
                                                <div className="propertiesInfo__container-rating-1">7</div>
                                                <div className="propertiesInfo__container-rating-2">,3</div>
                                            </div>
                                            <ul className="propertiesInfo__container-bars">
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                        <div className="propertiesInfo__barName">сюжет</div>
                                        <div className="propertiesInfo__bar"></div>
                                        <p className="propertiesInfo__moreInfo">{movie.year}, США, Драмы</p>
                                        {movie.filmLength && (
                                            <div className="propertiesInfo__time">{movie.filmLength} {formatFilmLength(movie.filmLength)}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="swiperItem__title">{movie.nameRu}</div>
                            <div className="swiperItem__subscribe">Подписка</div>
                        </li>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MoviesSlider