import React, { FC } from 'react';
import { Link } from "react-router-dom";
import ButtonDevice from "../footer/buttonDevice/ButtonDevice";
import './PersonMovieCard.scss';

interface IProps {
  image: string,
  year: number,
  movieName: string,
  movieId: number,
  rating: string
}

const PersonMovieCard: FC<IProps> = ({image, year, movieName, movieId, rating}) => {
  return (
    <div className="person-movie-card">
      <Link to={`/film/${movieId}`}>
        <div className="person-movie-card__flex">
         <div className="person-movie-card__flex person-movie-card__flex2">
           <img src={image} alt={movieName + 'poster'}/>
           <div className="person-movie-card__info">
             <p>{year}</p>
             <p>{movieName}</p>
             <p className="person-movie-card__rating">Рейтинг: {rating}</p>
             <div className="person-movie-card__hidden-action">
               <ButtonDevice
                 classes="nbl-button-chatButton person-movie-card__watch-btn"
                 href={`https://www.ivi.ru/watch/${movieId}`}
                 title="Смотреть"
               />
             </div>
           </div>
         </div>
          <div className="person-movie-card__action">
            <ButtonDevice
              classes="nbl-button-chatButton"
              href={`https://www.ivi.ru/watch/${movieId}`}
              title="Смотреть"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PersonMovieCard;