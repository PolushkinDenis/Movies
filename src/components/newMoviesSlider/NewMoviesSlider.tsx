import React, { FC } from "react";
import './NewMoviesSlider.scss'
import premieres_img from '../../images/newMoviesSlider/premieres.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const NewMoviesSlider: FC = () => {

    return (
        <div className="slick-slider">
            <Swiper navigation={true} modules={[Navigation]} className="slick-list">
                <SwiperSlide className="slick-track">
                    <div className="slick-slide">
                        <div className="nbl-poster">
                            <img className="nbl-poster__image" src={premieres_img} />
                        </div>
                    </div>
                    <div className="slick-slide">
                        <img src={premieres_img} />
                    </div>
                    <div className="slick-slide">
                        <img src={premieres_img} />
                    </div>
                    <div className="slick-slide">
                        <img src={premieres_img} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slick-slide">
                        <img src={premieres_img} />
                    </div>
                    <div className="slick-slide">
                        <img src={premieres_img} />
                    </div>
                    <div className="slick-slide">
                        <img src={premieres_img} />
                    </div>
                    <div className="slick-slide">
                        <img src={premieres_img} />
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* <div className="slick-slide">
                <img src={premieres_img}/>
            </div>
            <div className="slick-slide">
                <img src={premieres_img}/>
            </div>
            <div className="slick-slide">
                <img src={premieres_img}/>
            </div>
            <div className="slick-slide">
                <img src={premieres_img}/>
            </div> */}
        </div>
    )
}

export default NewMoviesSlider