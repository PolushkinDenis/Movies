import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../UI/Button/MyButton";
import "./HeaderTopMenu.scss";

function HeaderTopMenu() {
  return (
    <div className="headerTop__menu">
      <nav className="headerMenu__navigation">
        <ul className="headerMenu__list">
          <li className="headerMenu__listItem">
            <Link to={"/"}>
              <MyButton classes="nbl-button__primaryText">Мой Иви</MyButton>
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
  );
}

export default HeaderTopMenu;
