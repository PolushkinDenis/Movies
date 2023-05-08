import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { BsCheckLg } from "react-icons/bs";
import MyButton from "../../UI/Button/MyButton";
import "./FiltersDesktop.scss";
import { useTranslation } from "react-i18next";
import { AutoContext } from "../../../context/";
import { Link, useNavigate } from "react-router-dom";
import FilterDropdownCou from "./FilterDropdownCou";
import FilterDropdownGen from "./FilterDropdownGen";
import useDebounce from "../../../hooks/useDebounce";
import { fetchMovies } from "../../../store/movies/moviesAction";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import genresFilms from "../../../data/genresFilms";
import { IPersonFinded } from "../../../types/IPerson";
import { moviesAPI } from "../../../services/MoviesService";
import { fetchDirector } from "../../../store/searchDirector/directorAction";
import { fetchActor } from "../../../store/searchActor/actorAction";

interface TypeFiltersDesktop {
  clickSwitchFilter: string | null;
  setClickSwitchFilter: React.Dispatch<React.SetStateAction<string | null>>;
}

function FiltersDesktop({
  clickSwitchFilter,
  setClickSwitchFilter,
}: TypeFiltersDesktop) {
  const {
    activeGenres,
    setActiveGenres,
    activeCountries,
    setActiveCountries,
    rangeValue,
    setRangeValue,
    evaluationsValue,
    setEvaluationsValue,
    //
    searchDirectorValue,
    setSearchDirectorValue,
    searchDirectorСhoice,
    setSearchDirectorСhoice,
    //
    searchActorValue,
    setSearchActorValue,
    searchActorСhoice,
    setSearchActorСhoice,
  } = useContext(AutoContext);

  const foundDirectors = useAppSelector(state => state.directorSlice.directors)
  const foundActors = useAppSelector(state => state.actorSlice.actors)

  const debouncedRangeValue = useDebounce<number>(rangeValue, 600)
  const debouncedEvaluationsValue = useDebounce<number>(evaluationsValue, 600)
  const debouncedSearchDirectorValue = useDebounce<string>(searchDirectorValue, 600)
  const debouncedSearchActorValue = useDebounce<string>(searchActorValue, 600)

  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const goTransitionsPage = (e: any) => navigate(e);
  function shiftRangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    setRangeValue(Number(e.currentTarget.value));
    if (
      Number(e.currentTarget.value) !== 7.5 &&
      window.location.pathname === "/movies"
    ) {
      goTransitionsPage("/movies/all");
    }
  }

  function shiftEvaluationsValue(e: React.ChangeEvent<HTMLInputElement>) {
    setEvaluationsValue(Number(e.currentTarget.value));
    if (
      Number(e.currentTarget.value) !== 7.5 &&
      window.location.pathname === "/movies"
    ) {
      goTransitionsPage("/movies/all");
    }
  }

  useEffect(() => {
    dispatch(fetchMovies(activeGenres, activeCountries, rangeValue, evaluationsValue));
  }, [debouncedRangeValue]);

  useEffect(() => {
    dispatch(fetchMovies(activeGenres, activeCountries, rangeValue, evaluationsValue));
  }, [debouncedEvaluationsValue]);

  useEffect(() => {
    dispatch(fetchDirector(searchDirectorValue))
  }, [debouncedSearchDirectorValue])

  useEffect(() => {
    dispatch(fetchActor(searchActorValue))
  }, [debouncedSearchActorValue])

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

  function onChangeSearchDirector(e: React.FormEvent<HTMLInputElement>) {
    console.log(e.currentTarget.value);
    setSearchDirectorValue(e.currentTarget.value);
  }
  function onChangeSearchActor(e: React.FormEvent<HTMLInputElement>) {
    console.log(e.currentTarget.value);
    setSearchActorValue(e.currentTarget.value);
  }
  function onClickDirectorСhoice(item: IPersonFinded) {
    console.log(item);
    if (searchDirectorСhoice.personId === item.personId) {
      setSearchDirectorСhoice({
        personId: -1,
        nameRu: "",
      });
    } else {
      setSearchDirectorСhoice(item);
    }
    console.log(searchDirectorСhoice);
  }
  function onClickActorСhoice(item: IPersonFinded) {
    console.log(item);
    console.log(searchActorСhoice);
    if (searchActorСhoice.personId === item.personId) {
      setSearchActorСhoice({
        personId: -1,
        nameRu: "",
      });
    } else {
      setSearchActorСhoice(item);
    }
  }
  function limpiezaFilter() {
    setActiveGenres([]);
    setActiveCountries([]);
    setEvaluationsValue(0);
    setRangeValue(7.5);
    setSearchActorValue("");
    setSearchDirectorValue("");
    setSearchDirectorСhoice({
      personId: -1,
      nameRu: "",
    });
    setSearchActorСhoice({
      personId: -1,
      nameRu: "",
    });
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
                    {/* searchDirectorСhoice */}
                  </div>
                  {searchDirectorСhoice.personId === -1 ? (
                    ""
                  ) : (
                    <div className="nbl-plank__extra">
                      {searchDirectorСhoice.nameRu}
                    </div>
                  )}
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
                          value={searchDirectorValue}
                          onChange={onChangeSearchDirector}
                        />
                        <ul className="filterDropdown__list">
                          {/* {genresFilms.foundActors.rows.map((item, index) => { */}
                          {foundDirectors?.map((item, index) => {
                            return (
                              <li
                                key={item + "-" + index}
                                className={
                                  item.personId ===
                                  searchDirectorСhoice.personId
                                    ? "filterDropdown__item filterDropdown__item_radio checked"
                                    : "filterDropdown__item filterDropdown__item_radio"
                                }
                                onClick={() => onClickDirectorСhoice(item)}
                              >
                                <label
                                  htmlFor=""
                                  className="filterDropdown__label"
                                >
                                  <input
                                    className="filterDropdown__input"
                                    type="radio"
                                    name="years"
                                    value={item.nameRu}
                                    defaultChecked={
                                      item.personId ===
                                      searchDirectorСhoice.personId
                                    }
                                  />
                                  <div className="filterDropdown__input-text">
                                    {item.nameRu}
                                  </div>
                                  <div className="filterDropdown__radio"></div>
                                </label>
                              </li>
                            );
                          })}
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
                  <div className="nbl-plank__title">
                    {t("Поиск по Актёру")}
                    {/* searchDirectorСhoice */}
                  </div>
                  {searchActorСhoice.personId === -1 ? (
                    ""
                  ) : (
                    <div className="nbl-plank__extra">
                      {searchActorСhoice.nameRu}
                    </div>
                  )}
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
                          value={searchActorValue}
                          onChange={onChangeSearchActor}
                        />
                        <ul className="filterDropdown__list">
                          {foundActors.map((item, index) => {
                            return (
                              <li
                                key={item + "-" + index}
                                className={
                                  item.personId === searchActorСhoice.personId
                                    ? "filterDropdown__item filterDropdown__item_radio checked"
                                    : "filterDropdown__item filterDropdown__item_radio"
                                }
                                onClick={() => onClickActorСhoice(item)}
                              >
                                <label
                                  htmlFor=""
                                  className="filterDropdown__label"
                                >
                                  <input
                                    className="filterDropdown__input"
                                    type="radio"
                                    name="years"
                                    value={item.nameRu}
                                    defaultChecked={
                                      item.personId ===
                                      searchActorСhoice.personId
                                    }
                                  />
                                  <div className="filterDropdown__input-text">
                                    {item.nameRu}
                                  </div>
                                  <div className="filterDropdown__radio"></div>
                                </label>
                              </li>
                            );
                          })}
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
        </div>
        <div className="filtersDesktop__button-container">
          <div
            className={
              activeGenres.length ||
              activeCountries.length ||
              evaluationsValue !== 0 ||
              rangeValue !== 7.5 ||
              searchDirectorСhoice.personId !== -1 ||
              searchDirectorСhoice.nameRu !== "" ||
              searchActorСhoice.personId !== -1 ||
              searchActorСhoice.nameRu !== ""
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
