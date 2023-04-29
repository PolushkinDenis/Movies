import React from "react";
import "./SlimPoster.scss";
import { TbFlag3 } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdColorWand } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import { TbCircleOff } from "react-icons/tb";

import { Link } from "react-router-dom";

function SlimPoster() {
  return (
    <li className="recommendSwiper__swiper-item">
      <Link to={"/film/"}>
        <div className="swiperItem__container">
          <img
            className="swiperItem__container-image"
            src="https://thumbs.dfs.ivi.ru/storage2/contents/9/1/4514a3111b4121c4ea02facf52efc1.jpg/234x360/?q=85"
            alt="film"
          />
          <div className="swiperItem__container-properties">
            <FaRegBookmark />
            <IoMdColorWand
              style={{
                transform: "rotate(90deg)",
              }}
            />
            <AiOutlineStar />
            <TbCircleOff
              style={{
                transform: "rotate(90deg)",
              }}
            />

            <div className="swiperItem__container-properties-info">
              <div className="propertiesInfo__container">
                <div className="propertiesInfo__container-rating">
                  <div className="propertiesInfo__container-rating-1">7</div>
                  <div className="propertiesInfo__container-rating-2">,3</div>
                </div>
                <ul className="propertiesInfo__container-bars">
                  <li>
                    <div
                      style={{
                        backgroundColor: "#ea003d",
                        width: "50%",
                        height: "2px",
                        borderRadius: "2px",
                      }}
                    ></div>
                  </li>
                  <li>
                    {" "}
                    <div
                      style={{
                        backgroundColor: "#ea003d",
                        width: "10px",
                        height: "2px",
                        borderRadius: "2px",
                      }}
                    ></div>
                  </li>
                  <li>
                    {" "}
                    <div
                      style={{
                        backgroundColor: "#ea003d",
                        width: "10px",
                        height: "2px",
                        borderRadius: "2px",
                      }}
                    ></div>
                  </li>
                  <li>
                    {" "}
                    <div
                      style={{
                        backgroundColor: "#ea003d",
                        width: "10px",
                        height: "2px",
                        borderRadius: "2px",
                      }}
                    ></div>
                  </li>
                </ul>
              </div>
              <div className="propertiesInfo__barName">сюжет</div>
              <div className="propertiesInfo__bar">
                {" "}
                <div
                  style={{
                    backgroundColor: "#ea003d",
                    width: "50%",
                    height: "4px",
                    borderRadius: "2px",
                  }}
                ></div>
              </div>
              <p className="propertiesInfo__moreInfo">2020, США, Драмы</p>
              <div className="propertiesInfo__time">93 минуты</div>
            </div>
          </div>
          <div className="swiperItem__title">Рейка</div>
          <div className="swiperItem__subscribe">Подписка</div>
        </div>
      </Link>
    </li>
  );
}

export default SlimPoster;
