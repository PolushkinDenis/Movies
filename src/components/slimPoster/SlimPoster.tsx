import React, { FC } from "react";
import "./SlimPoster.scss";
import { TbFlag3 } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdColorWand } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import { TbCircleOff } from "react-icons/tb";
import { formatFilmLength } from "../../helpers/formatFilmLength";
import { Link } from "react-router-dom";
import { IMovie } from "../../types/IMovies";

interface SlimPosterProps {
  movie: IMovie
}


const SlimPoster: FC<SlimPosterProps> = ({ movie }) => {

  return (
    <li className="slim-poster__swiper-item">
      <Link to={"/film/"}>
        <div className="swiperItem__container">
          <img
            className="swiperItem__container-image"
            src={movie.posterUrlPreview}
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
                  <div className="propertiesInfo__container-rating-1">{movie.ratingKinopoisk}</div>
                  {/* <div className="propertiesInfo__container-rating-2">,3</div> */}
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
              <p className="propertiesInfo__moreInfo">{movie.year}, {movie.countries[0].countryNameRu}, {movie.genres[0].genreNameRu}</p>
              <div className="propertiesInfo__time">{movie.filmLength} {formatFilmLength(movie.filmLength)}</div>
            </div>
          </div>
          <div className="swiperItem__title">{movie.nameRu}</div>
          <div className="swiperItem__subscribe">Подписка</div>
        </div>
      </Link>
    </li>
  );
}

export default SlimPoster;
