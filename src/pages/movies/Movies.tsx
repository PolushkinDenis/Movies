import React, { FC, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import qs from "qs";
import "./Movies.scss";
import { IGenresMovies } from "../../types/IGenresMovies";
import { ICountry } from "../../types/ICountry";
import NewMoviesSlider from "../../components/newMoviesSlider/NewMoviesSlider";
import FiltersDesktop from "../../components/main/filter/FiltersDesktop";
import Sorting from "../../components/main/sorting/Sorting";
import HeaderBar from "../../components/main/headerBar/HeaderBar";
import SlimPoster from "../../components/slimPoster/SlimPoster";
import { AutoContext } from "../../context";
import MoviesAll from "./MoviesAll";
import genresFilms from "../../data/genresFilms";
import { AnyAction } from "@reduxjs/toolkit";

function Movies() {
  const navigate = useNavigate();
  const location = useLocation();
  //Countries,Genres,Rating,Evaluations,SearchDirector,SearchActor
  const [clickSwitchFilter, setClickSwitchFilter] = React.useState<
    string | null
  >("");
  const {
    activeGenres,
    setActiveGenres,
    activeCountries,
    setActiveCountries,
    rangeValue,
    setRangeValue,
    evaluationsValue,
    setEvaluationsValue,
  } = useContext(AutoContext);
  const isMounted = React.useRef(false);

  const [clickToggleSorting, setClickToggleSorting] =
    React.useState<boolean>(false);

  function clickFilterClose(e: any) {
    if (!e.target.closest(".filtersDesktop__plank")) {
      setClickSwitchFilter("");
    }
    if (!e.target.closest(".catalogControlPanel__pageSection")) {
      setClickToggleSorting(false);
    }
  }
  React.useEffect(() => {
    document.body.addEventListener("click", clickFilterClose);
  }, []);
  React.useEffect(() => {
    // при вервой загрузки стр проверяет url и добавляет их в context
    let urlGenres: IGenresMovies[] | any[] = [];
    let urlCountries: ICountry[] | any[] = [];
    const urlData = location.pathname.split("/");
    if (urlData[2] === "filter") {
      urlData[3].split("+").forEach((item) => {
        return genresFilms.genresMovies.find((i: IGenresMovies) => {
          if (item === i.genreNameEng) {
            urlGenres.push(i);
          }
        });
      });
      urlData[3].split("+").forEach((item) => {
        return genresFilms.countries.find((i: ICountry) => {
          if (item === i.countryNameEng) {
            urlCountries.push(i);
          }
        });
      });
      if (urlCountries.length === 0) {
        urlData[4].split("+").forEach((item) => {
          return genresFilms.countries.find((i: ICountry) => {
            if (item === i.countryNameEng) {
              urlCountries.push(i);
            }
          });
        });
      }
      setActiveGenres(urlGenres);
      setActiveCountries(urlCountries);
    } else if (urlData[2] !== "all" && urlData[2] !== "") {
      urlGenres = genresFilms.genresMovies.filter((i: IGenresMovies) => {
        if (urlData[2] === i.genreNameEng) {
          return i;
        }
      });
      urlCountries = genresFilms.countries.filter((i: ICountry) => {
        if (
          urlData[2] === i.countryNameEng ||
          urlData[3] === i.countryNameEng
        ) {
          return i;
        }
      });
      setActiveGenres(urlGenres);
      setActiveCountries(urlCountries);
    }

    // если в url есть рейтин и оценки он их добавит
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      console.log(params);
      setRangeValue(Number(params.rangeValue));
      setEvaluationsValue(Number(params.evaluationsValue));
    }
  }, []);
  //Запрещает при первом рендоре и стартовых значений появляться в url ?rangeValue&evaluationsValue
  React.useEffect(() => {
    if (isMounted.current && (rangeValue !== 7.5 || evaluationsValue !== 0)) {
      const queryString = qs.stringify({
        rangeValue,
        evaluationsValue,
      });
      navigate("?" + queryString);
    }
    isMounted.current = true;
  }, [rangeValue, evaluationsValue]);

  //Translation
  const { t } = useTranslation();

  return (
    <div>
      <main className="main">
        <div className="main__container _container">
          <section className="section-advertisement">{t("Реклама")}</section>
          <HeaderBar></HeaderBar>
          <Sorting
            clickToggleSorting={clickToggleSorting}
            setClickToggleSorting={setClickToggleSorting}
          ></Sorting>
          <FiltersDesktop
            clickSwitchFilter={clickSwitchFilter}
            setClickSwitchFilter={setClickSwitchFilter}
          ></FiltersDesktop>
          {window.location.pathname === "/movies" ||
          window.location.pathname === "/movies/" ? (
            <section className="pageSection">
              <div className="pageSection__movies__container">
                <div className="gallery">
                  <div className="gallery__header">
                    <span className="gallery__headerLink">Фильмы-новинки</span>
                  </div>
                  <div className="gallery__viewport-inner">
                    <NewMoviesSlider />
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <MoviesAll></MoviesAll>
          )}
        </div>
      </main>
    </div>
  );
}

export default Movies;
