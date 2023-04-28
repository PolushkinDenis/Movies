import { FC } from 'react';
import { TbFlag3 } from 'react-icons/tb';
import { TbFlag3Filled } from 'react-icons/tb';

const RecommendSwiper: FC = () => {
  return (
    <div className="recommendSwiper">
      <h1 className="recommendSwiper__title">С фильмом «Хранитель тайн» смотрят</h1>
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
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div>сюжет</div>
                <div></div>
                <p>2020, США, Драмы</p>
                <div>93 минуты</div>
              </div>
            </div>
          </div>
          <div className="swiperItem__title">Рейка</div>
          <div className="swiperItem__subscribe">Подписка</div>
        </li>
      </ul>
    </div>
  );
};

export default RecommendSwiper;