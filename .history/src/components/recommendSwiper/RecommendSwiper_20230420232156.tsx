import { FC } from 'react';

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
            <div className="swiperItem__container-properties">fdf</div>
          </div>
          <div className="swiperItem__title">Рейка</div>
          <div className="swiperItem__subscribe">Подписка</div>
        </li>
      </ul>
    </div>
  );
};

export default RecommendSwiper;
