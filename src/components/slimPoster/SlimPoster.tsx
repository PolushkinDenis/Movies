import React from "react";
import "./SlimPoster.scss";
import { TbFlag3 } from "react-icons/tb";
import { Link } from "react-router-dom";

function SlimPoster() {
  return (
    <li className="gallery__item gallery__item_virtual">
      <Link to={"/film/"}>
        <div className="nbl-slimPosterBlock__imageSection">
          <div className="nbl-poster nbl-slimPosterBlock__nbl-poster">
            <div className="nbl-poster__imageWrapper">
              <img
                className="swiperItem__container-image"
                src="https://thumbs.dfs.ivi.ru/storage2/contents/9/1/4514a3111b4121c4ea02facf52efc1.jpg/234x360/?q=85"
                alt="film"
              />
            </div>
            <div className="nbl-poster__properties">
              <div className="nbl-poster__hoards">
                <div className="hoard">
                  <TbFlag3></TbFlag3>
                </div>
                <div className="hoard">
                  <TbFlag3></TbFlag3>
                </div>
                <div className="hoard">
                  <TbFlag3></TbFlag3>
                </div>
                <div className="hoard">
                  <TbFlag3></TbFlag3>
                </div>
              </div>
              <div className="nbl-poster__properties-inner"></div>
            </div>
            <div className="nbl-ageBadge">18+</div>
          </div>
        </div>
        <div className="nbl-slimPosterBlock__textSection">
          <div className="nbl-slimPosterBlock__title">Рейка</div>
          <div className="slimPosterBlock__extra">Подписка</div>
        </div>
      </Link>
    </li>
  );
}

export default SlimPoster;
