import React, { FC, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Movies.scss";
import { IGenresMovies } from "../../types/IGenresMovies";
import NewMoviesSlider from "../../components/newMoviesSlider/NewMoviesSlider";
import FiltersDesktop from "../../components/main/filter/FiltersDesktop";
import Sorting from "../../components/main/sorting/Sorting";
import HeaderBar from "../../components/main/headerBar/HeaderBar";
import SlimPoster from "../../components/slimPoster/SlimPoster";
import { AutoContext } from "../../context";
import MoviesAll from "./MoviesAll";
import MoviesFilt from "./MoviesFilt";
import genresFilms from "../../data/genresFilms";
import { AnyAction } from "@reduxjs/toolkit";

function Movies() {
  const navigate = useNavigate();
  const location = useLocation();
  // location.pathname

  // Countries,Genres,Rating,Evaluations,SearchDirector,SearchActor
  const [clickSwitchFilter, setClickSwitchFilter] = React.useState<
    string | null
  >("");
  const { activeGenres, setActiveGenres, activeCountries, setActiveCountries } =
    useContext(AutoContext);

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
    let rez: IGenresMovies[] | any[];
    console.log(location.pathname);

    const urlData = location.pathname.split("/");
    console.log(urlData);
    if (urlData[2] === "filter") {
      rez = urlData[3].split("+").map((item) => {
        return genresFilms.genresMovies.find((i: IGenresMovies) => {
          if (item === i.genreNameEng) {
            return i;
          }
        });
      });
      setActiveGenres(rez);
    } else if (urlData[2] !== "all" && urlData[2] !== "") {
      rez = genresFilms.genresMovies.filter((i: IGenresMovies) => {
        if (urlData[2] === i.genreNameEng) {
          return i;
        }
      });
      setActiveGenres(rez);
      console.log(urlData[2]);
    }
  }, []);
  //
  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));
  //     // console.log(Object(params.activeGenres));
  //     // console.log(["криминал", "комедия", "драма"]);
  //     setActiveGenres(Object(params.activeGenres));
  //     setActiveCountries(Object(params.activeCountries));
  //   }
  // }, []);

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
          ) : window.location.pathname === "/Movies/all" ? (
            <MoviesAll></MoviesAll>
          ) : (
            <MoviesFilt></MoviesFilt>
          )}
        </div>
      </main>
    </div>
  );
}

export default Movies;
