import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import MyButton from "../../UI/Button/MyButton";
import "./FiltersDesktop.scss";
const janr = [
  "аниме",
  "биографический",
  "боевик",
  "вестерн",
  "военный",
  "детектив",
  "детский",
  "документальный",
  "драма",
  "исторический",
  "кинокомикс",
  "комедия",
  "концерт",
  "короткометражный",
  "криминал",
  "мелодрама",
  "мистика",
  "музыка",
  "мультфильм",
  "мюзикл",
  "научный",
  "нуар",
  "приключения",
  "реалити-шоу",
  "семейный",
  "спорт",
  "триллер",
  "ужасы",
  "фантастика",
  "фэнтези",
];

function FiltersDesktop() {
  // Countries,Genres,Rating,Evaluations
  const [clickSwitchFilter, setClickSwitchFilter] = React.useState("");
  const [rangeValue, setRangeValue] = React.useState(7.5);
  const [evaluationsValue, setEvaluationsValue] = React.useState(0);
  function shiftRangeValue(e: any) {
    setRangeValue(e.target.value);
  }
  function shiftEvaluationsValue(e: any) {
    setEvaluationsValue(e.target.value);
  }

  function clickToggleFilter(e: any) {
    if (e.target.closest(".flag-Genres")) {
      if (clickSwitchFilter === "Genres") {
        setClickSwitchFilter("");
      } else {
        setClickSwitchFilter("Genres");
      }
    } else if (e.target.closest(".flag-Countries")) {
      if (clickSwitchFilter === "Countries") {
        setClickSwitchFilter("");
      } else {
        setClickSwitchFilter("Countries");
      }
    } else if (e.target.closest(".flag-Rating")) {
      if (clickSwitchFilter === "Rating") {
        setClickSwitchFilter("");
      } else {
        setClickSwitchFilter("Rating");
      }
    } else if (e.target.closest(".flag-Evaluations")) {
      if (clickSwitchFilter === "Evaluations") {
        setClickSwitchFilter("");
      } else {
        setClickSwitchFilter("Evaluations");
      }
    }
  }
  return (
    <section className="filtersDesktop">
      <div className="filtersDesktop__content">
        <div className="filtersDesktop__plank-list">
          <div className="filtersDesktop__plank-item flag-Genres">
            <div
              className={
                clickSwitchFilter === "Genres"
                  ? "filtersDesktop__plank isActive"
                  : "filtersDesktop__plank"
              }
            >
              <MyButton onClick={clickToggleFilter} classes="nbl-plank">
                <div className="nbl-plank__textWrapper">
                  <div className="nbl-plank__title">Жанры</div>
                </div>
                <div className="nbl-plank__icon">
                  <IoIosArrowDown></IoIosArrowDown>
                </div>
              </MyButton>
              {clickSwitchFilter === "Genres" ? (
                <div className="filterDropdown filterDropdown_genres">
                  <div className="filterDropdown__inner">
                    <div className="filterDropdown__content">
                      <div className="filterDropdown__list-container">
                        <ul className="filterDropdown__list">
                          {janr.map((item, index) => {
                            return (
                              <li
                                key={item + "-" + index}
                                className="filterDropdown__item nbl-button__primaryText"
                              >
                                {item}
                              </li>
                            );
                          })}
                          {/* <li className="filterDropdown__item filterDropdown__item_checkbox">
                          <label className="filterDropdown__label">
                            <input
                              type="checkbox"
                              className="filterDropdown__input"
                            />
                            <div className="filterDropdown__input-text">Артхаус</div>
                            <div className="filterDropdown__checkbox"></div>
                          </label>
                        </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="filtersDesktop__plank-item flag-Countries">
            <div
              className={
                clickSwitchFilter === "Countries"
                  ? "filtersDesktop__plank isActive"
                  : "filtersDesktop__plank"
              }
            >
              <MyButton onClick={clickToggleFilter} classes="nbl-plank">
                <div className="nbl-plank__textWrapper">
                  <div className="nbl-plank__title">Страны</div>
                </div>
                <div className="nbl-plank__icon">
                  <IoIosArrowDown></IoIosArrowDown>
                </div>
              </MyButton>
              {clickSwitchFilter === "Countries" ? (
                <div className="filterDropdown filterDropdown_countries">
                  <div className="filterDropdown__inner">
                    <div className="filterDropdown__content">
                      <div className="filterDropdown__list-container">
                        <ul className="filterDropdown__list">
                          {janr.map((item, index) => {
                            return (
                              <li
                                key={item + "-" + index}
                                className="filterDropdown__item nbl-button__primaryText"
                              >
                                {item}
                              </li>
                            );
                          })}
                          {/* <li className="filterDropdown__item filterDropdown__item_checkbox">
                          <label className="filterDropdown__label">
                            <input
                              type="checkbox"
                              className="filterDropdown__input"
                            />
                            <div className="filterDropdown__input-text">Артхаус</div>
                            <div className="filterDropdown__checkbox"></div>
                          </label>
                        </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="filtersDesktop__plank-item flag-Rating dropdownCenter">
            <div
              className={
                clickSwitchFilter === "Rating"
                  ? "filtersDesktop__plank isActive"
                  : "filtersDesktop__plank"
              }
            >
              <MyButton onClick={clickToggleFilter} classes="nbl-plank">
                <div className="nbl-plank__textWrapper">
                  <div className="nbl-plank__title">Рейтинг</div>
                </div>
                <div className="nbl-plank__icon">
                  <IoIosArrowDown></IoIosArrowDown>
                </div>
              </MyButton>
              {clickSwitchFilter === "Rating" ? (
                <div className="filterDropdown filterDropdown_rating">
                  <div className="filterDropdown__inner">
                    <div className="filterDropdown__content">
                      <div className="filterDropdown__list-container">
                        <div className="slidecontainer">
                          {"от " + rangeValue}
                          <div className="slidecontainer__item">
                            <div className="slidecontainer__meaning-min">5</div>
                            <input
                              type="range"
                              step="0.1"
                              min="5"
                              max="10"
                              value={rangeValue}
                              onChange={shiftRangeValue}
                              className="slider"
                            />
                            <div className="slidecontainer__meaning-max">
                              10
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="filtersDesktop__plank-item flag-Evaluations dropdownCenter">
            <div
              className={
                clickSwitchFilter === "Evaluations"
                  ? "filtersDesktop__plank isActive"
                  : "filtersDesktop__plank"
              }
            >
              <MyButton onClick={clickToggleFilter} classes="nbl-plank">
                <div className="nbl-plank__textWrapper">
                  <div className="nbl-plank__title">Количество оценок</div>
                </div>
                <div className="nbl-plank__icon">
                  <IoIosArrowDown></IoIosArrowDown>
                </div>
              </MyButton>
              {clickSwitchFilter === "Evaluations" ? (
                <div className="filterDropdown filterDropdown_evaluations">
                  <div className="filterDropdown__inner">
                    <div className="filterDropdown__content">
                      <div className="filterDropdown__list-container">
                        <div className="slidecontainer">
                          {"от " + evaluationsValue + " т."}
                          <div className="slidecontainer__item">
                            <div className="slidecontainer__meaning-min">
                              1 т.
                            </div>
                            <input
                              type="range"
                              step="1"
                              min="1"
                              max="1000"
                              value={evaluationsValue}
                              onChange={shiftEvaluationsValue}
                              className="slider"
                            />
                            <div className="slidecontainer__meaning-max">
                              1000 т.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="filtersDesktop__button-container">
          <div className="filtersDesktop__button filtersDesktop__button_disabled">
            <div className="filtersDesktop__button-icon">
              <GrClose></GrClose>
            </div>
            Сбросить фильтры
          </div>
        </div>
      </div>
    </section>
  );
}

export default FiltersDesktop;
