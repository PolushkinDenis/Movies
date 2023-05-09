import React, { FC, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import './PromoSlider.scss'
import { AutoContext } from "../../context";

interface PromoData {
    imgHref: string,
    title: string,
    synopsis: string,
    id: number;
    genreNameRu: string;
    genreNameEng: string;
    createdAt: string;
    updatedAt: string; 
}

interface PromoSliderProps {
    promos: PromoData[]
}

const PromoSlider: FC<PromoSliderProps> = ({ promos }) => {
    const [swiper, setSwiper] = useState(1);

    const {
        activeGenres,
        setActiveGenres,
        activeCountries,
        setActiveCountries,
        rangeValue,
        setRangeValue,
        evaluationsValue,
        setEvaluationsValue,
        searchDirectorValue,
        setSearchDirectorValue,
        searchDirectorСhoice,
        setSearchDirectorСhoice,
        searchActorValue,
        setSearchActorValue,
        searchActorСhoice,
        setSearchActorСhoice,
    } = useContext(AutoContext);

    const navigate = useNavigate();
    const goTransitionsPage = (e: any) => navigate(e);

    const showСompilation = (promo: PromoData) => {
        setActiveGenres([{id: promo.id, genreNameRu: promo.genreNameRu, genreNameEng: promo.genreNameEng, createdAt: promo.createdAt, updatedAt: promo.updatedAt}])
        goTransitionsPage("/movies/all");
    }

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
                        <div className="mySwiper__promo__link" >
                            <div className="mySwiper__promo__content">
                                <div className="mySwiper__promo__title">{promo.title}</div>
                                <div className="mySwiper__promo__synopsis">{promo.synopsis}</div>
                                <button onClick={e => showСompilation(promo)} className="mySwiper__promo__btn">Показать подборку</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
}

export default PromoSlider