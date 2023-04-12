import React, { FC } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MyButton from "../UI/Button/MyButton";

const Header: FC = () => {
  return (
    <div>
      <header className="header">
        <div className="header__container _container">
          <div className="headerTop">
            <div className="headerTop__logo">
              <img
                src="https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg"
                alt="ivi"
              ></img>
            </div>

            <div className="headerTop__menu">
              <nav className="headerMenu__navigation">
                <ul className="headerMenu__list">
                  <li className="headerMenu__listItem">
                    <Link to={"/"}>
                      <MyButton classes="nbl-button__primaryText">
                        Мой Иви
                      </MyButton>
                    </Link>
                  </li>
                  <li className="headerMenu__listItem">
                    <a href="">
                      <div className="nbl-button__primaryText">Что нового</div>
                    </a>
                  </li>
                  <li className="headerMenu__listItem headerMenu__listItem_expanding">
                    <a href="">
                      <div className="nbl-button__primaryText">Фильмы</div>
                    </a>
                  </li>
                  <li className="headerMenu__listItem headerMenu__listItem_expanding">
                    <a href="">
                      <div className="nbl-button__primaryText">Сериалы</div>
                    </a>
                  </li>
                  <li className="headerMenu__listItem headerMenu__listItem_expanding">
                    <a href="">
                      <div className="nbl-button__primaryText">Мультфильмы</div>
                    </a>
                  </li>
                  <li className="headerMenu__listItem headerMenu__listItem_expanding">
                    <a href="">
                      <div className="nbl-button__primaryText">TV+</div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="headerTop__wideArea">
              <div className="headerTop__additionalButton">
                <Link
                  to={
                    "https://www.ivi.ru/subscribe?from=top_menu&redirect_url=%2Fmovies%2Fsport"
                  }
                >
                  <MyButton classes="nbl-button__subscription">
                    Смотреть 30 дней за 1 ₽
                  </MyButton>
                </Link>
              </div>
              <div className="headerTop__headerSearch">
                <MyButton classes="nbl-button__primaryText nbl-button__icon">
                  <div className="nbl-icon">
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
                      />
                    </svg>
                  </div>
                  Поиск
                </MyButton>
              </div>
            </div>
            <div className="headerTop__notify">
              <svg
                // fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                // width="16px"
                // height="16px"
                viewBox="0 0 30.25 30.25"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M29.967,24.208l-4.742-6.582v-7.506c0-5.568-4.53-10.099-10.1-10.099c-5.569,0-10.1,4.53-10.1,10.099v7.506l-4.742,6.582
		c-0.329,0.457-0.375,1.061-0.118,1.562c0.256,0.501,0.772,0.815,1.335,0.815h10.008c0,0.012-0.003,0.019-0.003,0.027
		c0,1.999,1.622,3.618,3.62,3.618s3.619-1.619,3.619-3.618c0-0.011-0.003-0.02-0.003-0.027H28.75c0.562,0,1.079-0.314,1.335-0.815
		C30.342,25.267,30.296,24.665,29.967,24.208z M4.43,23.584l3.313-4.599c0.184-0.255,0.283-0.562,0.283-0.877v-7.991
		c0-3.914,3.185-7.099,7.1-7.099s7.1,3.185,7.1,7.099v7.991c0,0.313,0.101,0.622,0.283,0.877l3.312,4.599H4.43z"
                  />
                </g>
              </svg>
            </div>
            <div className="headerTop__avatar"></div>
          </div>
        </div>
      </header>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/films">Фильмы</NavLink>
    </div>
  );
};

export default Header;
