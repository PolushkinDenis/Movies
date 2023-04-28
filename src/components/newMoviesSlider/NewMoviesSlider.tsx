import React, { FC, useState, useEffect } from "react";
import './NewMoviesSlider.scss'
import premieres_img from '../../images/newMoviesSlider/premieres.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchNewMovies } from "../../store/newMovies/newMoviesAction";
import { IMovie } from "../../types/IMovies";


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

const NewMoviesSlider: FC = () => {
    const dispach = useAppDispatch()
    const newMoviesRedux = useAppSelector(state => state.newMoviesSlice.slide)
    const [arrMovies, setArrMovies] = useState<IMovie[][]>(newMoviesRedux)

    useEffect(() => {
        if (newMoviesRedux.length < 4) {
            dispach(fetchNewMovies())
            dispach(fetchNewMovies())
            dispach(fetchNewMovies())
            dispach(fetchNewMovies())
            dispach(fetchNewMovies())
            dispach(fetchNewMovies())     
            dispach(fetchNewMovies())               
        }
    }, [])

    useEffect(() => {
        setArrMovies(newMoviesRedux)
    }, [newMoviesRedux])

    console.log(newMoviesRedux)
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
                    spaceBetween: 20,
                },
                745: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                },
                920: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 20,
                },
            }}
            modules={[Navigation]}
            className="mySwiper"
        >
            {arrMovies.map((film, index) => (
                <SwiperSlide key={index}>
                    <div className="slick-track">
                        <div className="slick__link" >
                            <div className="slick-slide">
                                <div className="nbl-poster">
                                    <Link to='/film'>
                                        <div className="nbl-poster__fon">
                                            <div className="nms-poster__imageWrapper">
                                                <div className="main-img">
                                                    {film.map((item, index) => (
                                                        <img className={index === 0 ? "poster-main" : `poster-${index}`} src={item.posterUrlPreview} alt=" " />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="miniPromoBlockCustom__title">Новинки</div>
                </SwiperSlide>
            ))
            }
        </Swiper >
    )
}

export default NewMoviesSlider