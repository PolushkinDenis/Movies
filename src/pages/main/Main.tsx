import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { testSlice } from "../../store/slices/testSlice";
import "./Main.scss";
import NewMoviesSlider from "../../components/newMoviesSlider/NewMoviesSlider";
import PromoSlider from "../../components/promoSlider/PromoSlider";

const promoData = [
  {href: "https://www.ivi.ru/collections/this-is-the-end", imgHref: "https://thumbs.dfs.ivi.ru/storage5/contents/0/3/99372bba75f4652a5d4b2f6a7d2ca3.jpg/1216x524/?q=85", title: "Это всего лишь конец света", synopsis: "Самые зрелищные и масштабные фильмы-катастрофы"},
  {href: "https://www.ivi.ru/collections/this-is-the-end", imgHref: "https://thumbs.dfs.ivi.ru/storage5/contents/0/3/99372bba75f4652a5d4b2f6a7d2ca3.jpg/1216x524/?q=85", title: "Это всего лишь конец света", synopsis: "Самые зрелищные и масштабные фильмы-катастрофы"},
  {href: "https://www.ivi.ru/collections/this-is-the-end", imgHref: "https://thumbs.dfs.ivi.ru/storage5/contents/0/3/99372bba75f4652a5d4b2f6a7d2ca3.jpg/1216x524/?q=85", title: "Это всего лишь конец света", synopsis: "Самые зрелищные и масштабные фильмы-катастрофы"},
  {href: "https://www.ivi.ru/collections/this-is-the-end", imgHref: "https://thumbs.dfs.ivi.ru/storage5/contents/0/3/99372bba75f4652a5d4b2f6a7d2ca3.jpg/1216x524/?q=85", title: "Это всего лишь конец света", synopsis: "Самые зрелищные и масштабные фильмы-катастрофы"},
]

const Main: FC = () => {



  return (
    <div>
      <main className="main">
        <div className="promo">
          <PromoSlider promos={promoData}/>
        </div>
      </main>
    </div>
  );
};

export default Main;
