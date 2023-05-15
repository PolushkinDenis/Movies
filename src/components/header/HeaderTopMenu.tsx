import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../UI/Button/MyButton";
import "./HeaderTopMenu.scss";
import { useTranslation } from "react-i18next";

function HeaderTopMenu() {
  //Translation
  const { t } = useTranslation();
  return (
    <div className="headerTop__menu">
      <nav className="headerMenu__navigation">
        <ul className="headerMenu__list">
          <li className="headerMenu__listItem">
            <Link to={"/"}>
              <MyButton classes="nbl-button__primaryText">
                {t("Мой Иви")}
                {/* Мой Иви */}
              </MyButton>
            </Link>
          </li>
          <li className="headerMenu__listItem">
            <a href="">
              <div className="nbl-button__primaryText">
                {t("Что нового")}
                {/* Что нового */}
              </div>
            </a>
          </li>
          <li className="headerMenu__listItem headerMenu__listItem_expanding">
            <Link to="/movies">
              <div className="nbl-button__primaryText">
                {t("Фильмы")}
                {/* Фильмы */}
              </div>
            </Link>
          </li>
          <li className="headerMenu__listItem headerMenu__listItem_expanding">
            <Link to="/movies">
              <div className="nbl-button__primaryText">
                {t("Сериалы")}
                {/* Сериалы */}
              </div>
            </Link>
          </li>
          <li className="headerMenu__listItem headerMenu__listItem_expanding">
            <Link to="/movies">
              <div className="nbl-button__primaryText">
                {t("Мультфильмы")}
                {/* Мультфильмы */}
              </div>
            </Link>
          </li>
          <li className="headerMenu__listItem headerMenu__listItem_expanding">
            <a href="https://www.ivi.ru/tvplus">
              <div className="nbl-button__primaryText">
                {t("TV+")}
                {/* TV+ */}
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderTopMenu;
