import React from "react";
import "./HeaderDropdownBody.scss";
import MyButton from "../UI/Button/MyButton";

interface TypeHeaderDropdownBody {
  clasee?: string;
  type: string | null;
}
function HeaderDropdownBody({ clasee, type }: TypeHeaderDropdownBody) {
  return (
    <div className={`headerDropdownBody ` + clasee}>
      <div className="headerDropdown__content">
        {type === "movies" ? (
          <div className="headerDropdown__grid">
            <div className="box-genres">
              <div className="box-genres__title box-title">Жанры</div>
              <ul className="box-genres__lists">
                <li className="box-genres__item">аниме</li>
                <li className="box-genres__item">биографический</li>
                <li className="box-genres__item">боевик</li>
                <li className="box-genres__item">вестерн</li>
                <li className="box-genres__item">военный</li>
                <li className="box-genres__item">детектив</li>
                <li className="box-genres__item">аниме</li>
                <li className="box-genres__item">биографический</li>
                <li className="box-genres__item">боевик</li>
                <li className="box-genres__item">вестерн</li>
                <li className="box-genres__item">военный</li>
                <li className="box-genres__item">детектив</li>
              </ul>
            </div>
            <div className="box-countries">
              <div className="box-countries__title box-title">Страны</div>
              <ul className="box-countries__lists">
                <li className="box-countries__item">Русские</li>
                <li className="box-countries__item">Зарубежные</li>
                <li className="box-countries__item">Американские</li>
                <li className="box-countries__item">Советское кино</li>
              </ul>
            </div>
            <div className="box-years">
              <div className="box-years__title box-title">Годы</div>
              <ul className="box-years__lists">
                <li className="box-years__item">Фильмы 2023 года</li>
                <li className="box-years__item">Фильмы 2022 года</li>
                <li className="box-years__item">Фильмы 2021 года</li>
                <li className="box-years__item">Фильмы 2020 года</li>
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
        ) : (
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
                <defs id="defs2" />
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
        )}
      </div>
    </div>
  );
}

export default HeaderDropdownBody;
