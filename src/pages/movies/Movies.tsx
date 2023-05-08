import React, { FC, useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import qs from "qs";
import "./Movies.scss";
import { IGenresMovies } from "../../types/IGenresMovies";
import { ICountry } from "../../types/ICountry";
import NewMoviesSlider from "../../components/newMoviesSlider/NewMoviesSlider";
import FiltersDesktop from "../../components/main/filter/FiltersDesktop";
import Sorting from "../../components/main/sorting/Sorting";
import Carousel from "../../components/UI/carousel/Carousel";
import { SplideSlide } from "@splidejs/react-splide";
import PersonCard from "../../components/personCard/PersonCard";
import { AutoContext } from "../../context";
import PersonSlider from "../../components/pesonSlider/PersonSlider";
import HeaderBar from "../../components/main/headerBar/HeaderBar";
import SlimPoster from "../../components/slimPoster/SlimPoster";
import genresFilms from "../../data/genresFilms";
import { AnyAction } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchMovies, getMoreMovies } from "../../store/movies/moviesAction";

function Movies() {
  const navigate = useNavigate();
  const location = useLocation();
  //Countries,Genres,Rating,Evaluations,SearchDirector,SearchActor
  const [clickSwitchFilter, setClickSwitchFilter] = React.useState<
    string | null
  >("");
  const {
    setActiveGenres,
    setActiveCountries,
    rangeValue,
    setRangeValue,
    evaluationsValue,
    setEvaluationsValue,
    //
    searchDirectorСhoice,
    setSearchDirectorСhoice,
    //
    searchActorСhoice,
    setSearchActorСhoice,
  } = useContext(AutoContext);
  // const isMounted = React.useRef(false);

  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.moviesSlice);
  const [page, setPage] = useState(0);

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

      setRangeValue(Number(params.rangeValue));
      setEvaluationsValue(Number(params.evaluationsValue));
      setSearchDirectorСhoice({
        personId: Number(params.directorСhoiceId),
        nameRu: String(params.directorСhoiceName),
      });
      setSearchActorСhoice({
        personId: Number(params.actorСhoiceId),
        nameRu: String(params.actorСhoiceName),
      });
    }
  }, []);
  //Запрещает при первом рендоре и стартовых значений появляться в url ?rangeValue&evaluationsValue
  React.useEffect(() => {
    if (
      // isMounted.current &&
      rangeValue !== 7.5 ||
      evaluationsValue !== 0 ||
      searchDirectorСhoice.personId !== -1 ||
      searchDirectorСhoice.nameRu !== "" ||
      searchActorСhoice.personId !== -1 ||
      searchActorСhoice.nameRu !== ""
    ) {
      const queryString = qs.stringify({
        rangeValue,
        evaluationsValue,
        directorСhoiceId: searchDirectorСhoice.personId,
        directorСhoiceName: searchDirectorСhoice.nameRu,
        actorСhoiceId: searchActorСhoice.personId,
        actorСhoiceName: searchActorСhoice.nameRu,
      });

      navigate("?" + queryString);
    }
    // isMounted.current = true;
  }, [rangeValue, evaluationsValue, searchDirectorСhoice, searchActorСhoice]);

  const getMore = () => {
    setPage(page + 1);
    dispatch(getMoreMovies(activeGenres, activeCountries, page + 1));
  };

  useEffect(() => {
    dispatch(fetchMovies(activeGenres, activeCountries));
  }, [activeGenres, activeCountries]);

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
            <>
              <section className="pageSection">
                <div className="pageSection__movies__container">
                  <div className="gallery">
                    <div className="gallery__header">
                      <span className="gallery__headerLink">
                        Фильмы-новинки
                      </span>
                    </div>
                    <div className="gallery__viewport-inner">
                      <NewMoviesSlider />
                    </div>
                  </div>
                </div>
              </section>
              <section className="pageSection">
                <div className="pageSection__movies__container">
                  <div className="gallery">
                    <div className="gallery__header">
                      <span className="gallery__headerLink">Персоны</span>
                    </div>
                    <div className="gallery__viewport-inner">
                      <PersonSlider />
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <section className="pageSection genre__pageSection ">
              <div className="genre__gallery gallery ">
                <ul className="gallery__list">
                  {movies.map((movie) => (
                    <SlimPoster movie={movie} key={movie.id} />
                  ))}
                  <div className="genre__moreButton">
                    <button className="nbl-button nbl-button_style_ran">
                      <div
                        onClick={getMore}
                        className="nbl-button__primaryText"
                      >
                        Показать еще
                      </div>
                    </button>
                  </div>
                </ul>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default Movies;
