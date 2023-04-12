import React, { FC } from "react";
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
                    <a href="">
                      <MyButton>Мой Иви</MyButton>
                      <div className="nbl-button__primaryText">Мой Иви</div>
                    </a>
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
            <div className="headerTop__wideArea"></div>
            <div className="headerTop__notify"></div>
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
