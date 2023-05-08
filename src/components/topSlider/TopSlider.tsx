import React, { FC} from 'react'
import './TopSlider.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper'
import { moviesAPI } from '../../services/MoviesService'

const TopSlider: FC = () => {
    const { data: movies } = moviesAPI.useFetchMoviesTop10Query(10)
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
            {movies?.rows.map((film, index) => (
                <SwiperSlide key={film.id}>
                    <Link className='posterUrl' to={`/film/${film.id}`}>
                        <div className='posterUprightBlock__nbl-poster'>
                            <div className='poster__imageWrapper'>
                                <img className='poster__image' src={film.posterUrlPreview} />
                                <div className='poster__imageFade'></div>                              
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

export default TopSlider;
