import { FC } from 'react';

const RecommendSwiper: FC = () => {
  return (
    <div className="recommendSwiper">
      <h1 className="recommendSwiper__title">С фильмом «Хранитель тайн» смотрят</h1>
      <div>
        <div>
          <img
            src="https://thumbs.dfs.ivi.ru/storage2/contents/9/1/4514a3111b4121c4ea02facf52efc1.jpg/234x360/?q=85"
            alt="film"
          />
        </div>
        <div>Рейка</div>
        <div>Подписка</div>
      </div>
    </div>
  );
};

export default RecommendSwiper;
