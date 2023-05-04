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

const newFilmsTtitle = [
    {title: "Российские новинки"},
    {title: "Зарубежные новинки"},
    {title: "Новые комедии"},
    {title: "Новые российские комедии"},
    {title: "Лучшие новинки"},

]

const NewMoviesSlider: FC = () => {
    const dispach = useAppDispatch()
    const newMoviesRedux = useAppSelector(state => state.newMoviesSlice.slide)
    const [arrMovies, setArrMovies] = useState<IMovie[][]>(newMoviesRedux)

    useEffect(() => {
        if (newMoviesRedux.length < 4) {
            dispach(fetchNewMovies("movies/filters?size=5&countryId=1&year=2022"))
            dispach(fetchNewMovies("movies/filters?size=5&countryId=6&countryId=7&countryId=11&year=2022"))
            dispach(fetchNewMovies("movies/filters?size=5&genreId=2&year=2022"))
            dispach(fetchNewMovies("movies/filters?size=5&genreId=2&countryId=1&year=2022"))
            dispach(fetchNewMovies("movies/filters?size=5&year=2023&orderBy=ratingKinopoisk"))
        }
    }, [])

    useEffect(() => {
        setArrMovies(newMoviesRedux)
    }, [newMoviesRedux])

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
                                                        <img className={index === 0 ? "poster-main" : `poster-${index}`} src={item.posterUrlPreview} alt=" " key={item.id}/>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="miniPromoBlockCustom__title">{newFilmsTtitle[index].title}</div>
                </SwiperSlide>
            ))
            }
        </Swiper >
    )
}

export default NewMoviesSlider