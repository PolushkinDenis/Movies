import React, { FC } from "react";
import './NewMoviesSlider.scss'
import premieres_img from '../../images/newMoviesSlider/premieres.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

const newFilmsData = [
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img }, title: "Премьеры на Иви"},
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img }, title: "Новинки подписки"},
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img }, title: "Лучшее в подписке"},
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img }, title: "Российские новинки"},
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img }, title: "Российские"},
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img }, title: "Зарубежные новинки"},
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img }, title: "Лучшие новинки"},
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: { premieres_img }, title: "Бесплатные новинки"},
]

const NewMoviesSlider: FC = () => {
    return (
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
            {newFilmsData.map((film) => (
                <SwiperSlide key={film.title}>
                <div className="slick-track">
                    <div className="slick__link" >
                        <div className="slick-slide">
                            <div className="nbl-poster">
                                <Link to={film.href}>
                                    <img className="nbl-poster__image" src={film.imgHref.premieres_img} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="miniPromoBlockCustom__title">{film.title}</div>
            </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default NewMoviesSlider