import React, { FC, useState, useEffect } from "react";
import './NewMoviesSlider.scss'
import premieres_img from '../../images/newMoviesSlider/premieres.png'
import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, SwiperOptions } from "swiper";
import { Link } from "react-router-dom";
import { moviesAPI } from "../../services/MoviesService";
import { IMovies } from "../../types/IMovies";
import { IFilm } from "../../types/IFilm";

const postersFilms = [
    { imgHref: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/5ec7dbd7-1cab-4eae-8846-8be00c56dc0a/150x225" },
    { imgHref: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/5ec7dbd7-1cab-4eae-8846-8be00c56dc0a/150x225" },
    { imgHref: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/5ec7dbd7-1cab-4eae-8846-8be00c56dc0a/150x225" },
    { imgHref: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/5ec7dbd7-1cab-4eae-8846-8be00c56dc0a/150x225" },
    { imgHref: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/5ec7dbd7-1cab-4eae-8846-8be00c56dc0a/150x225" },
]

const newFilmsData = [
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img }, title: "Премьеры на Иви" },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img }, title: "Новинки подписки" },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img }, title: "Лучшее в подписке" },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img }, title: "Российские новинки" },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img }, title: "Российские" },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img }, title: "Зарубежные новинки" },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img }, title: "Лучшие новинки" },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img }, title: "Бесплатные новинки" },
]

interface SlideData {
    href: string,
    imgHref: string
    title: string
}

interface Breakpoints {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
}

interface NewMoviesSliderProps {
    data: SlideData[],
    classes?: string
    breakpoints?: Breakpoints
}

interface MoviesSlide {
    movies: IFilm[]
}

interface NewMoviesArray {
    moviesArray: MoviesSlide[]
}

const NewMoviesSlider: FC<NewMoviesSliderProps> = ({data}) => {
    const [arrMovies, setArrMovies] = useState<NewMoviesArray[]>([])
    // const { data: movies, error, isLoading } = moviesAPI.useFetchMoviesTop10Query(10)
    const res = moviesAPI.useGetNewMoviesQuery("2023").data?.rows
    console.log(res)
    useEffect(() => {
        // console.log("USEEEFECT")
        // let newArrMovies = [...arrMovies]
        // res && newArrMovies.push(res)

        // res && setArrMovies(res)
        
    }, [res])

    console.log(arrMovies)

    return (
        <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
                395: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 10,
                },
                745: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 10,
                },
                920: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 10,
                },
              }}          
            modules={[Navigation]}
            className="mySwiper"
        >
            {data.map((item) => (
                <SwiperSlide key={item.title}>
                    <div className="slick-track">
                        <div className="slick__link" >
                            <div className="slick-slide">
                                <div className="nbl-poster">
                                    <Link to={item.href}>           
                                        {/* <div className="main-img">
                                        <img className="poster-main" src={postersFilms[0].imgHref}/>
                                        <img className="poster-1" src={postersFilms[1].imgHref}/>
                                        <img className="poster-2" src={postersFilms[2].imgHref}/>
                                        <img className="poster-3" src={postersFilms[3].imgHref}/>
                                        <img className="poster-4" src={postersFilms[4].imgHref}/>
                                    </div> */}
                                        <img className="nbl-poster__image" src={item.imgHref} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="miniPromoBlockCustom__title">{item.title}</div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default NewMoviesSlider