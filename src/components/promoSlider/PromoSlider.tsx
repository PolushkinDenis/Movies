import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import './PromoSlider.scss'

interface PromoData {
    href: string,
    imgHref: string,
    title: string,
    synopsis: string
}

interface PromoSliderProps {
    promos: PromoData[]
}

const PromoSlider: FC<PromoSliderProps> = ({ promos }) => {
    const [swiper, setSwiper] = useState(1);

    useEffect(() => {
        setSwiper(2)
      }, [])

    return (
        <div className="promoSlider__slider">
            <Swiper
                loop={true}
                autoplay={{ delay: 2500 }}
                slidesPerView={"auto"}
                speed={500}
                spaceBetween={15}
                initialSlide={swiper}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper__promo"
            >
                {promos.map((promo) => (
                    <SwiperSlide key={promo.imgHref}>
                        <img className="mySwiper__promo__logo" src={promo.imgHref} />
                        <Link className="mySwiper__promo__link" to={promo.href}>
                            <div className="mySwiper__promo__content">
                                <div className="mySwiper__promo__title">{promo.title}</div>
                                <div className="mySwiper__promo__synopsis">{promo.synopsis}</div>
                                <button className="mySwiper__promo__btn">Показать подборку</button>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}

export default PromoSlider