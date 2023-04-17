import React, { FC } from 'react';
import {Link} from "react-router-dom";
import './PersonCard.scss';

const checkFilmDeclension = (number: number) => {
  const numStr = String(number).trim();
  const lastDigit = parseInt(numStr[numStr.length - 1]);
  const penultimateDigit = parseInt(numStr[numStr.length - 2]);

  if (penultimateDigit === 1) {
    return 'фильмов';
  } else if (lastDigit === 1) {
    return 'фильм';
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return 'фильма';
  } else {
    return 'фильмов';
  }
};

interface IProps {
  name: string,
  image: string,
  mainMoviesAmount: number
}

const PersonCard: FC<IProps> = ({name, image, mainMoviesAmount}) => {
  const nameToArray = name.split(' ');

  return (
    <div  className="person-card">
      <Link to={`/person/${nameToArray[0]}_${nameToArray[1]}`}>
        <div className="person-card__relative">
          <div className="person-card__img-wrapper">
            <img
              src={image}
              alt={name}
            />
          </div>
          <p className="person-card__movies-amount">{mainMoviesAmount}</p>
        </div>
        <p className="person-card__name">
          {nameToArray[0]}<br/>{nameToArray[1]}
        </p>
        <p className="person-card__movies">
          {mainMoviesAmount} {checkFilmDeclension(mainMoviesAmount)}
        </p>
      </Link>
    </div>
  );
};

export default PersonCard;