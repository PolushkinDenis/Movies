import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
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
    return (
        <div className="promoSlider__slider">
            <Swiper
                autoplay={{delay: 2500}}
                slidesPerView={"auto"}
                rewind={true}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper__promo"
            >
                {promos.map((promo) => (
                    <SwiperSlide>
                        <img src={promo.imgHref} />
                        <Link to={promo.href}>
                            <div>
                                <div>{promo.title}</div>
                                <div>{promo.synopsis}</div>
                                <button>Показать подборку</button>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}

export default PromoSlider