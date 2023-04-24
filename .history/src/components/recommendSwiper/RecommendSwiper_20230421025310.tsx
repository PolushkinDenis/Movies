import { FC } from 'react';
import { TbFlag3 } from 'react-icons/tb';
import { TbFlag3Filled } from 'react-icons/tb';
import Carousel from '../UI/carousel/Carousel';
import { SplideSlide } from '@splidejs/react-splide';

const RecommendSwiper: FC = () => {
  return (
    <div className="recommendSwiper">
      {/* <h1 className="recommendSwiper__title">С фильмом «Хранитель тайн» смотрят</h1>
      <ul className="recommendSwiper__swiper">
        <li className="recommendSwiper__swiper-item">
          <div className="swiperItem__container">
            <img
              className="swiperItem__container-image"
              src="https://thumbs.dfs.ivi.ru/storage2/contents/9/1/4514a3111b4121c4ea02facf52efc1.jpg/234x360/?q=85"
              alt="film"
            />
            <div className="swiperItem__container-properties">
              <TbFlag3 />
              <div className="swiperItem__container-properties-info">
                <div className="propertiesInfo__container">
                  <div className="propertiesInfo__container-rating">
                    <div className="propertiesInfo__container-rating-1">7</div>
                    <div className="propertiesInfo__container-rating-2">,3</div>
                  </div>
                  <ul className="propertiesInfo__container-bars">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div className="propertiesInfo__barName">сюжет</div>
                <div className="propertiesInfo__bar"></div>
                <p className="propertiesInfo__moreInfo">2020, США, Драмы</p>
                <div className="propertiesInfo__time">93 минуты</div>
              </div>
            </div>
          </div>
          <div className="swiperItem__title">Рейка</div>
          <div className="swiperItem__subscribe">Подписка</div>
        </li>
      </ul> */}
      <Carousel perPage={2} perMove={1}>
        <SplideSlide>1</SplideSlide>
        <SplideSlide>1</SplideSlide>
        <SplideSlide>1</SplideSlide>
        <SplideSlide>1</SplideSlide>
      </Carousel>
    </div>
  );
};

export default RecommendSwiper;
