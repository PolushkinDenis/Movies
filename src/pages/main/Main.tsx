import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { testSlice } from "../../store/slices/testSlice";
import "./Main.scss";
import NewMoviesSlider from "../../components/newMoviesSlider/NewMoviesSlider";
import PromoSlider from "../../components/promoSlider/PromoSlider";

const promoData = [
  { href: "https://www.ivi.ru/collections/this-is-the-end", imgHref: "https://thumbs.dfs.ivi.ru/storage5/contents/0/3/99372bba75f4652a5d4b2f6a7d2ca3.jpg/1216x524/?q=85", title: "Это всего лишь конец света", synopsis: "Самые зрелищные и масштабные фильмы-катастрофы" },
  { href: "https://www.ivi.ru/collections/meditsinskie-serialyi", imgHref: "https://thumbs.dfs.ivi.ru/storage6/contents/5/5/03a8751c356b28a8dbf9a8a798be87.jpg/1216x524/?q=85", title: "Очень хорошие доктора", synopsis: "Лучшие медицинские сериалы для фанатов жанра" },
  { href: "https://www.ivi.ru/collections/ivi-originals", imgHref: "https://thumbs.dfs.ivi.ru/storage37/contents/0/a/1d3381c9a1549a24212f58b8c2495b.jpg/1216x524/?q=85", title: "Создано Иви", synopsis: "Целый вагон впечатлений и тележка эмоций: все проекты производства Иви в одном месте. Запрыгивай!" },
  { href: "https://www.ivi.ru/collections/amediateka-vesna-vremya-lyubvi", imgHref: "https://thumbs.dfs.ivi.ru/storage6/contents/e/b/419c834059e49aa440f3bfdaaaacc6.jpg/1216x524/?q=85", title: "Весна — время любви", synopsis: "Лучшие романтические сериалы о настоящей любви" },
]

const Main: FC = () => {
  return (
    <main className="main">
      <div className="promo">
        <PromoSlider promos={promoData} />
      </div>
      <section className="pageSection__main">
        <div className="pageSection__main__container">
          {/* <div className="home__teaserList"> */}
            <ul className="home__teaserList">
              <li className="home__teaserPlate">
                <div className="nbl-teaserTile__content nbl-teaserTile__content__subscribe">
                  <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg" />
                  <div className="nbl-teaserTile__caption">30 дней подписки за 1 ₽</div>
                </div>
              </li>
              <li className="home__teaserPlate">
                <div className="nbl-teaserTile__content">
                  <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/gift.svg" />
                  <div className="nbl-teaserTile__caption">Активировать сертификат</div>
                </div>
              </li>
            </ul>
        </div>
      </section>
    </main>
  );
};

export default Main;
