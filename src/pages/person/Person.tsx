import React, { FC } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import PersonMovieCard from "../../components/personMovieCard/PersonMovieCard";
import './Person.scss';
import { moviesAPI } from '../../services/MoviesService';

//test data
const personData = {
  poster: 'https://thumbs.dfs.ivi.ru/storage33/contents/9/e/5be16936d42c1e7536be10dfefc04e.jpg/1920x1080/?q=85',
  image: 'https://thumbs.dfs.ivi.ru/storage29/contents/4/d/f82823da4c37a42a210605da618318.jpg/120x144/?q=85',
  name: 'Дэниэл Рэдклифф',
  alternate: 'Daniel Radcliffe',
  story: 'Дэниэл Рэдклифф (Daniel Radcliffe) - британский актер театра и кино, прославившийся ролью Гарри Поттера в' +
    ' экранизации бестселлеров Джоан Роулинг.',
  filmsAmount: 50
};

type IParams = {
  name: string
}

const Person: FC = () => {
  const navigate = useNavigate();
  const { name } = useParams<IParams>()
  const personId = moviesAPI.useGetPersonIdByNameQuery(name).data?.rows[0]
  const { data: person } = moviesAPI.useGetPersonByIdQuery(Number(personId?.personId))

  const personInfo = (
    <div className="person__gradient">
      <div className="person__gradient-inner">
        <p className="person__alternate">{person?.person.nameEng}</p>
        <p className="person__name">{person?.person.nameRu}</p>
        {personData.story && <p className="person__story">{personData.story}</p>}
      </div>
    </div>
  );

  const prevPageElem = (
    <div
      onClick={() => navigate(-1)}
      className={`person__back ${person?.person.posterUrl ? 'person__back-position' : '_container'}`}
    >
      <svg
        style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg"
        width="16" height="16" fill="currentColor"
        className="bi bi-chevron-left" viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          fill="white"
        />
      </svg>
      <span>Назад</span>
    </div>
  );

  return (
    <div className="person">
      {
        person?.person.posterUrl ?
          <div
            style={{ backgroundImage: `url(${person?.person.posterUrl})` }}
            className="person__bg-img"
          >
            {prevPageElem}
            {personInfo}
          </div> :
          <div className="person__no-bg-img">
            {prevPageElem}
            <div className="person__img-wrapper">
              <img src={person?.person.posterUrl} alt={person?.person.nameRu} />
            </div>
            {personInfo}
          </div>
      }
      <div className="person__filmography">
        <p className="person__filmography-title">
          Полная фильмография
          <span>{person?.films.length} фильмов</span>
        </p>
        <div>
          {person && person?.films.map((film) => (
            <PersonMovieCard
              image={film[0].posterUrlPreview}
              year={film[0].year}
              movieName={film[0].nameRu}
              movieId={film[0].id}
              rating={film[0].ratingKinopoisk}
              key={film[0].id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Person;