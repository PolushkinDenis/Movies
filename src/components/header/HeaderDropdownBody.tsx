import React, {FC, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import parse from 'html-react-parser';
import genresFilms from "../../data/genresFilms";
import {OPTIONS_LIST} from "./HeaderDropdownConstants";
import MyButton from "../UI/Button/MyButton";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {userLogout} from "../../store/authorization/authorizationActions";
import MiniSpinner from "../UI/miniSpinner/MiniSpinner";
import "./HeaderDropdownBody.scss";

interface IProps {
  classN?: string;
  type: string | null;
}

const HeaderDropdownBody: FC<IProps> = ({type, classN}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logoutLoading = useAppSelector(state => state.authorizationReducer.logoutLoading);
  const logoutError = useAppSelector(state => state.authorizationReducer.logoutError);

  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const checkUserEmail = () => {
      const userData = localStorage.getItem('userData');

      if(userData) {
        setUserEmail(JSON.parse(userData).email);
      } else {
        setUserEmail('');
      }
    };

    checkUserEmail();

    window.addEventListener('storage', checkUserEmail);

    return () => {
      window.removeEventListener('storage', checkUserEmail);
    };
  }, []);

  const onLogout = async () => {
    await dispatch(userLogout());
    navigate('/');
  };

  let content: React.ReactNode;

  if (type === "movies") {
    content = (
      <div className="headerDropdown__grid">
        <div className="box-genres">
          <div className="box-genres__title box-title">Жанры</div>
          <ul className="box-genres__lists">
            {genresFilms.genresMovies.slice(0, 22).map((item, index) => {
              return (
                <li key={item + "-" + index} className="box-genres__item">
                  {item.genreNameRu}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="box-countries">
          <div className="box-countries__title box-title">Страны</div>
          <ul className="box-countries__lists">
            {genresFilms.countriesMovies.map((item, index) => {
              return (
                <li
                  key={item + "-" + index}
                  className="box-countries__item"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="box-years">
          <div className="box-years__title box-title">Годы</div>
          <ul className="box-years__lists">
            {genresFilms.yearsMovies.map((item, index) => {
              return (
                <li key={item + "-" + index} className="box-years__item">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="box-right">
          <div className="box-right__list">
            <div className="box-right__gutter">
              <div className="box-right__gutterStripe"></div>
            </div>

            <div className="box-right__item">
              <MyButton classes="nbl-tabs">Новинки</MyButton>
            </div>
            <div className="box-right__item">
              <MyButton classes="nbl-tabs">test</MyButton>
            </div>
            <div className="box-right__item">
              <MyButton classes="nbl-tabs">test</MyButton>
            </div>
            <div className="box-right__item">
              <MyButton classes="nbl-tabs">test</MyButton>
            </div>
            <div className="box-right__item">
              <MyButton classes="nbl-tabs">test</MyButton>
            </div>
          </div>
          <div className="box-right__sideContentwidet"></div>
        </div>
      </div>
    );
  }

  if (type === 'bell') {
    content = (
      <div className="dropdownNotifications">
        <div className="dropdownNotifications__icon">
          <svg
            width="56px"
            height="56px"
            viewBox="0 0 32 32"
            id="svg5"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs id="defs2"/>
            <g id="layer1" transform="translate(-300,-100)">
              <path
                d="m 316,102 c -2.19729,0 -4,1.80271 -4,4 a 1.000095,1.000095 0 0 0 0,0.006 c 0.004,0.67668 0.17824,1.34193 0.50977,1.93359 a 0.99999499,0.99999499 0 0 0 1.36132,0.38477 0.99999499,0.99999499 0 0 0 0.38477,-1.36133 c -0.16483,-0.29418 -0.25322,-0.62618 -0.25586,-0.96484 10e-4,-1.11548 0.88425,-1.99805 2,-1.99805 1.11575,0 1.99896,0.88257 2,1.99805 -0.003,0.33518 -0.0889,0.66415 -0.25195,0.95703 a 0.99999499,0.99999499 0 0 0 0.38672,1.35937 0.99999499,0.99999499 0 0 0 1.35937,-0.38672 c 0.32737,-0.5879 0.50179,-1.249 0.50586,-1.92187 A 1.000095,1.000095 0 0 0 320,106 c 0,-2.19729 -1.80271,-4 -4,-4 z"
                id="path22520"
              />

              <path
                d="m 316,106 c -4.95872,0 -9,4.04128 -9,9 v 6 c -1.6447,0 -3,1.3553 -3,3 0,1.6447 1.3553,3 3,3 h 18 c 1.6447,0 3,-1.3553 3,-3 0,-1.6447 -1.3553,-3 -3,-3 v -6 c 0,-4.95872 -4.04128,-9 -9,-9 z m 0,2 c 3.87783,0 7,3.12217 7,7 v 7 a 1.000105,1.000105 0 0 0 1,1 h 1 c 0.57127,0 1,0.42873 1,1 0,0.57127 -0.42873,1 -1,1 h -18 c -0.57127,0 -1,-0.42873 -1,-1 0,-0.57127 0.42873,-1 1,-1 h 1 a 1.000105,1.000105 0 0 0 1,-1 v -7 c 0,-3.87783 3.12217,-7 7,-7 z"
                id="rect22470"
              />

              <path
                d="m 311,128 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 10 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z"
                id="path22489"
              />

              <path
                d="m 324.57227,105.26172 a 1,1 0 0 0 -1.41211,0.0879 1,1 0 0 0 0.0879,1.41211 c 1.85845,1.63946 3.16702,3.8864 3.59765,6.41016 a 1,1 0 0 0 1.1543,0.81835 1,1 0 0 0 0.81641,-1.15429 c -0.51035,-2.9909 -2.05478,-5.64284 -4.24414,-7.57422 z"
                id="path22577"
              />

              <path
                d="m 308.16211,105.00586 a 1,1 0 0 0 -0.72461,0.24805 c -2.19473,1.93225 -3.74518,4.58811 -4.25586,7.58398 a 1,1 0 0 0 0.81836,1.1543 1,1 0 0 0 1.1543,-0.81836 c 0.43092,-2.52795 1.74062,-4.77787 3.60351,-6.41797 a 1,1 0 0 0 0.0899,-1.41211 1,1 0 0 0 -0.68555,-0.33789 z"
                id="rect22564"
              />
            </g>
          </svg>
        </div>
        <div className="dropdownNotifications__text">
          Здесь появляются только важные сообщения
        </div>
      </div>
    );
  }

  if (type === "profile") {
    content = (
      <div className="dropdownNotifications__flex dropdownNotifications__flex-justify">
        <div className="dropdownNotifications__flex dropdownNotifications__flex-stretch dropdownNotifications__profile-box1">
          {OPTIONS_LIST.map((option, index) => (
            <a key={index} className="option" href={option.href}>
              <div>
                {parse(option.svg)}
              </div>
              <p>{option.title}</p>
            </a>
          ))}
        </div>
        <div className="divider"/>
        <div className="dropdownNotifications__profile-box2">
          <div>
            {
              userEmail === '' ?
                <>
                  <MyButton classes="nbl-button__subscription dropdownNotifications__profile-btn">
                    <Link to={'/login'}>Войти</Link>
                  </MyButton>
                  <MyButton classes="nbl-button__subscription dropdownNotifications__profile-btn">
                    <Link to={'/registration'}>Зарегистрироваться</Link>
                  </MyButton>
                </> :
                <MyButton
                  classes="nbl-button__subscription dropdownNotifications__profile-btn"
                  onClick={onLogout}
                >
                  {!logoutLoading ? 'Выйти' : <MiniSpinner/>}
                </MyButton>
            }
          </div>
          <div className="dropdownNotifications__profile-box2-bottom">
            <p>
              <a href={'https://www.ivi.ru/profile/settings'}>Настройки</a>
            </p>
            <p>
              <a
                href={'https://ask.ivi.ru/?_gl=1*16o7ov8*_ga*MTQ3ODc4MzIuMTY4MTQ4ODEyNw..*_ga_GETQ4387MJ*MTY4MjY5MjMzMC4xOS4xLjE2ODI3MDg3OTEuNTguMC4w'}
                target="_blank"
              >
                Помощь
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`headerDropdownBody ` + classN}>
      <div className="headerDropdown__content">
        {content}
      </div>
    </div>
  );
};

export default HeaderDropdownBody;