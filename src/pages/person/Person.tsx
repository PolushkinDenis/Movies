import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import PersonMovieCard from "../../components/personMovieCard/PersonMovieCard";
import './Person.scss';

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

const Person: FC = () => {
  const navigate = useNavigate();

  const personInfo = (
    <div className="person__gradient">
      <div className="person__gradient-inner">
        <p className="person__alternate">{personData.alternate}</p>
        <p className="person__name">{personData.name}</p>
        {personData.story && <p className="person__story">{personData.story}</p>}
      </div>
    </div>
  );

  const prevPageElem = (
    <div
      onClick={() => navigate(-1)}
      className={`person__back ${personData.poster ? 'person__back-position' : '_container'}`}
    >
      <svg
        style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg"
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
        personData.poster ?
          <div
            style={{backgroundImage: `url(${personData.poster})`}}
            className="person__bg-img"
          >
            {prevPageElem}
            {personInfo}
          </div> :
          <div className="person__no-bg-img">
            {prevPageElem}
            <div className="person__img-wrapper">
              <img src={personData.image} alt={personData.name}/>
            </div>
            {personInfo}
          </div>
      }
      <div className="person__filmography">
        <p className="person__filmography-title">
          Полная фильмография
          <span>{personData.filmsAmount} фильмов</span>
        </p>
        <div>
          <PersonMovieCard
            image={'https://thumbs.dfs.ivi.ru/storage2/contents/f/3/9cc8c3c27c79bb1c7070a181a8437d.jpg/172x264/?q=85'}
            year={2022}
            movieName={'Странный Эл'}
            movieId={508772}
            rating={6.9}
          />
          <PersonMovieCard
            image={'https://thumbs.dfs.ivi.ru/storage28/contents/1/b/1edfca5174b0805359f4c77ae0aff0.jpg/172x264/?q=85'}
            year={2020}
            movieName={'Побег из Претории'}
            movieId={211385}
            rating={8.0}
          />
          <PersonMovieCard
            image={'https://thumbs.dfs.ivi.ru/storage2/contents/f/3/9cc8c3c27c79bb1c7070a181a8437d.jpg/172x264/?q=85'}
            year={2022}
            movieName={'Странный Эл'}
            movieId={508772}
            rating={6.9}
          />
          <PersonMovieCard
            image={'https://thumbs.dfs.ivi.ru/storage28/contents/1/b/1edfca5174b0805359f4c77ae0aff0.jpg/172x264/?q=85'}
            year={2020}
            movieName={'Побег из Претории'}
            movieId={211385}
            rating={8.0}
          />
        </div>
      </div>
    </div>
  );
};

export default Person;