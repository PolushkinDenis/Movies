import React, { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { BsCheckLg } from "react-icons/bs";
import MyButton from "../../UI/Button/MyButton";
import "./FiltersDesktop.scss";
// import FilterDropdown from "./FilterDropdown";
import { useTranslation } from "react-i18next";
import { AutoContext } from "../../../context/";
import { Link } from "react-router-dom";
import FilterDropdownCou from "./FilterDropdownCou";
import FilterDropdownGen from "./FilterDropdownGen";

interface TypeFiltersDesktop {
  clickSwitchFilter: string | null;
  setClickSwitchFilter: React.Dispatch<React.SetStateAction<string | null>>;
}

function FiltersDesktop({
  clickSwitchFilter,
  setClickSwitchFilter,
}: TypeFiltersDesktop) {
  const [rangeValue, setRangeValue] = React.useState<number>(7.5);
  const [evaluationsValue, setEvaluationsValue] = React.useState<number>(0);

  const { activeGenres, setActiveGenres, activeCountries, setActiveCountries } =
    useContext(AutoContext);

  function shiftRangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    setRangeValue(Number(e.currentTarget.value));
  }
  function shiftEvaluationsValue(e: React.ChangeEvent<HTMLInputElement>) {
    setEvaluationsValue(Number(e.currentTarget.value));
  }

  function clickToggleFilter(e: React.MouseEvent<HTMLDivElement>) {
    if (e.currentTarget.closest(".flag-Genres")) {
      if (clickSwitchFilter === "Genres") {
        setClickSwitchFilter("");
      } else {
        setClickSwitchFilter("Genres");
      }
    } else if (e.currentTarget.closest(".flag-Countries")) {
      if (clickSwitchFilter === "Countries") {
        setClickSwitchFilter("");
      } else {
        setClickSwitchFilter("Countries");
      }
    } else if (e.currentTarget.closest(".flag-Rating")) {
      if (clickSwitchFilter === "Rating") {
        setClickSwitchFilter("");
      } else {
        setClickSwitchFilter("Rating");
      }
    } else if (e.currentTarget.closest(".flag-Evaluations")) {
      if (clickSwitchFilter === "Evaluations") {
        setClickSwitchFilter("");
      } else {
        setClickSwitchFilter("Evaluations");
      }
    } else if (e.currentTarget.closest(".flag-SearchDirector")) {
      if (clickSwitchFilter === "SearchDirector") {
        setClickSwitchFilter("");
      } else {
        setClickSwitchFilter("SearchDirector");
      }
    } else if (e.currentTarget.closest(".flag-SearchActor")) {
      if (clickSwitchFilter === "SearchActor") {
        setClickSwitchFilter("");
      } else {
        setClickSwitchFilter("SearchActor");
      }
    }
  }

  function limpiezaFilter() {
    setActiveGenres([]);
    setActiveCountries([]);
    setEvaluationsValue(0);
    setRangeValue(7.5);
  }

  //Translation
  const { t } = useTranslation();

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
                  <div className="nbl-plank__title">{t("Жанры")}</div>
                  {activeGenres.length === 0 ? (
                    ""
                  ) : (
                    <div className="nbl-plank__extra">
                      {activeGenres.reduce((accumulator, item) => {
                        if (accumulator.length === 0) {
                          return item.genreNameRu;
                        } else {
                          return accumulator + "," + item.genreNameRu;
                        }
                      }, "")}
                    </div>
                  )}
                </div>
                <div className="nbl-plank__icon">
                  <IoIosArrowDown></IoIosArrowDown>
                </div>
              </MyButton>
              {clickSwitchFilter === "Genres" ? (
                <FilterDropdownGen></FilterDropdownGen>
              ) : (
                // <FilterDropdown
                //   classes={"genres"}
                //   meaningActiv={activeGenres}
                //   funcActiv={setActiveGenres}
                //   breakpoints={{
                //     280: {
                //       slidesPerView: 3,
                //       slidesPerGroup: 1,
                //       spaceBetween: 12,
                //     },
                //     744: {
                //       slidesPerView: 5,
                //       slidesPerGroup: 2,
                //       spaceBetween: 12,
                //     },
                //   }}
                // ></FilterDropdown>
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
                  <div className="nbl-plank__title">{t("Страны")}</div>
                  {activeCountries.length === 0 ? (
                    ""
                  ) : (
                    <div className="nbl-plank__extra">
                      {activeCountries.reduce((accumulator, item) => {
                        if (accumulator.length === 0) {
                          return item.countryNameRu;
                        } else {
                          return accumulator + "," + item.countryNameRu;
                        }
                      }, "")}
                    </div>
                  )}
                </div>
                <div className="nbl-plank__icon">
                  <IoIosArrowDown></IoIosArrowDown>
                </div>
              </MyButton>
              {clickSwitchFilter === "Countries" ? (
                // <FilterDropdown
                //   classes={"countries"}
                //   meaningActiv={activeCountries}
                //   funcActiv={setActiveCountries}
                // ></FilterDropdown>
                <FilterDropdownCou></FilterDropdownCou>
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
                  <div className="nbl-plank__title">{t("Рейтинг")}</div>
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
                  <div className="nbl-plank__title">
                    {t("Количество оценок")}
                  </div>
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
                              0 т.
                            </div>
                            <input
                              type="range"
                              step="100"
                              min="0"
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
          <div className="filtersDesktop__plank-item flag-SearchDirector">
            <div
              className={
                clickSwitchFilter === "SearchDirector"
                  ? "filtersDesktop__plank isActive"
                  : "filtersDesktop__plank"
              }
            >
              <MyButton onClick={clickToggleFilter} classes="nbl-plank">
                <div className="nbl-plank__textWrapper">
                  <div className="nbl-plank__title">
                    {t("Поиск по Режиссёру")}
                  </div>
                </div>
                <div className="nbl-plank__icon">
                  <IoIosArrowDown></IoIosArrowDown>
                </div>
              </MyButton>
              {clickSwitchFilter === "SearchDirector" ? (
                <div className="filterDropdown filterDropdown_searchDirector">
                  <div className="filterDropdown__inner">
                    <div className="filterDropdown__content">
                      <div className="filterDropdown__list-container">
                        <input
                          className="search-input"
                          type="text"
                          placeholder="Поиск"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="filtersDesktop__plank-item flag-SearchActor">
            <div
              className={
                clickSwitchFilter === "SearchActor"
                  ? "filtersDesktop__plank isActive"
                  : "filtersDesktop__plank"
              }
            >
              <MyButton onClick={clickToggleFilter} classes="nbl-plank">
                <div className="nbl-plank__textWrapper">
                  <div className="nbl-plank__title">{t("Поиск по Актёру")}</div>
                </div>
                <div className="nbl-plank__icon">
                  <IoIosArrowDown></IoIosArrowDown>
                </div>
              </MyButton>
              {clickSwitchFilter === "SearchActor" ? (
                <div className="filterDropdown filterDropdown_searchActor">
                  <div className="filterDropdown__inner">
                    <div className="filterDropdown__content">
                      <div className="filterDropdown__list-container">
                        <input
                          className="search-input"
                          type="text"
                          placeholder="Поиск"
                        />
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
              evaluationsValue !== 0 ||
              rangeValue !== 7.5
                ? "filtersDesktop__button"
                : "filtersDesktop__button filtersDesktop__button_disabled"
            }
            onClick={limpiezaFilter}
          >
            <Link to={"/movies/all"}>
              <div className="filtersDesktop__button-icon">
                <GrClose></GrClose>
              </div>
              {t("Сбросить фильтры")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FiltersDesktop;
