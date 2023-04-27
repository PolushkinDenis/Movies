import React, { FC } from 'react'
import './TopSlider.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper'
import { IMovies } from '../../types/IMovies'


//Даные с Бека TEST
const newFilmsData  = [
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: "https://thumbs.dfs.ivi.ru/storage33/contents/b/1/abbeaa2d5c95b43afa0f740e0d0e2a.png/604x406/?q=85", title: "Премьеры на Иви" },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: "https://thumbs.dfs.ivi.ru/storage33/contents/b/1/abbeaa2d5c95b43afa0f740e0d0e2a.png/604x406/?q=85", title: "Новинки подписки" },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: "https://thumbs.dfs.ivi.ru/storage33/contents/b/1/abbeaa2d5c95b43afa0f740e0d0e2a.png/604x406/?q=85", title: "Лучшее в подписке" },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: "https://thumbs.dfs.ivi.ru/storage33/contents/b/1/abbeaa2d5c95b43afa0f740e0d0e2a.png/604x406/?q=85", title: "Российские новинки" },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: "https://thumbs.dfs.ivi.ru/storage33/contents/b/1/abbeaa2d5c95b43afa0f740e0d0e2a.png/604x406/?q=85", title: "Российские" },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: "https://thumbs.dfs.ivi.ru/storage33/contents/b/1/abbeaa2d5c95b43afa0f740e0d0e2a.png/604x406/?q=85", title: "Зарубежные новинки" },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: "https://thumbs.dfs.ivi.ru/storage33/contents/b/1/abbeaa2d5c95b43afa0f740e0d0e2a.png/604x406/?q=85", title: "Лучшие новинки" },
    { href: "https://www.ivi.ru/collections/new-movies", imgHref: "https://thumbs.dfs.ivi.ru/storage33/contents/b/1/abbeaa2d5c95b43afa0f740e0d0e2a.png/604x406/?q=85", title: "Бесплатные новинки" },
  ]

interface TopSlider {
    topFilms: IMovies
}

const TopSlider: FC<TopSlider> = ({ topFilms }) => {
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
            {topFilms.rows.map((film, index) => (
                <SwiperSlide key={film.id}>
                    <Link className='posterUrl' to={`/film/${film.id}`}>
                        <div className='posterUprightBlock__nbl-poster'>
                            <div className='poster__imageWrapper'>
                                <img className='poster__image' src={film.posterUrlPreview} />
                                <div className='poster__imageFade'></div>
                                {/* <div className='poster__imageLogoArea'>
                                            <img className='poster__imageLogo' src={film.logoUrl} />
                                        </div> */}
                                <div className='poster__placeNumber'>
                                    <img className='poster__picture-number' src={`https://solea-parent.dfs.ivi.ru/picture/bypass/number${index + 1}.svg`} />
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default TopSlider