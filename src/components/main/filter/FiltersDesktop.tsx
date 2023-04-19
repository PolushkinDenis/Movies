import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { BsCheckLg } from "react-icons/bs";
import MyButton from "../../UI/Button/MyButton";
import "./FiltersDesktop.scss";
import FilterDropdown from "./FilterDropdown";

function FiltersDesktop({ clickSwitchFilter, setClickSwitchFilter }: any) {
  const [rangeValue, setRangeValue] = React.useState<number>(7.5);
  const [evaluationsValue, setEvaluationsValue] = React.useState<number>(1);
  const [activeGenres, setActiveGenres] = React.useState<string[]>([]);
  const [activeCountries, setActiveCountries] = React.useState<string[]>([]);
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
  function limpiezaFilter(e: any) {
    setActiveGenres([]);
    setActiveCountries([]);
    setEvaluationsValue(1);
    setRangeValue(7.5);
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
                  {activeGenres.length === 0 ? (
                    ""
                  ) : (
                    <div className="nbl-plank__extra">
                      {activeGenres.join(", ")}
                    </div>
                  )}
                </div>
                <div className="nbl-plank__icon">
                  <IoIosArrowDown></IoIosArrowDown>
                </div>
              </MyButton>
              {clickSwitchFilter === "Genres" ? (
                <FilterDropdown
                  classes={"genres"}
                  meaningActiv={activeGenres}
                  funcActiv={setActiveGenres}
                ></FilterDropdown>
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
                  {activeCountries.length === 0 ? (
                    ""
                  ) : (
                    <div className="nbl-plank__extra">
                      {activeCountries.join(", ")}
                    </div>
                  )}
                </div>
                <div className="nbl-plank__icon">
                  <IoIosArrowDown></IoIosArrowDown>
                </div>
              </MyButton>
              {clickSwitchFilter === "Countries" ? (
                <FilterDropdown
                  classes={"countries"}
                  meaningActiv={activeCountries}
                  funcActiv={setActiveCountries}
                ></FilterDropdown>
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
                  <div className="nbl-plank__extra">{"от " + rangeValue}</div>
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
                  <div className="nbl-plank__extra">
                    {"от " + evaluationsValue + " т."}
                  </div>
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
          <div
            className={
              activeGenres.length ||
              activeCountries.length ||
              evaluationsValue !== 1 ||
              rangeValue !== 7.5
                ? "filtersDesktop__button"
                : "filtersDesktop__button filtersDesktop__button_disabled"
            }
            onClick={limpiezaFilter}
          >
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
