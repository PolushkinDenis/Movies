import React, { FC, useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Movies.scss";
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
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchMovies, getMoreMovies } from "../../store/movies/moviesAction";
import MoviesAll from "./MoviesAll";
import MoviesFilt from "./MoviesFilt";

function Movies() {
  // Countries,Genres,Rating,Evaluations,SearchDirector,SearchActor
  const dispatch = useAppDispatch()
  const { movies } = useAppSelector(state => state.moviesSlice)
  const [page, setPage] = useState(0)
  const [clickSwitchFilter, setClickSwitchFilter] = useState<string | null>("");
  // const [activeGenres, setActiveGenres] = React.useState<string[]>([]);
  // const [activeCountries, setActiveCountries] = React.useState<string[]>([]);
  const { activeGenres, setActiveGenres, activeCountries, setActiveCountries } = useContext(AutoContext);

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

  const getMore = () => {
    setPage(page + 1)
    dispatch(getMoreMovies(activeGenres, activeCountries, page+1))
  }

  useEffect(() => {
    dispatch(fetchMovies(activeGenres, activeCountries))
  }, [activeGenres, activeCountries])

  // console.log(movies)
  // console.log(activeGenres)

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

          <section className="pageSection genre__pageSection ">
            <div className="genre__gallery gallery ">
              <ul className="gallery__list">
                {movies.map((movie) => (
                  <SlimPoster movie={movie} key={movie.id}/>
                ))}            
                <div className="genre__moreButton">
                  <button className="nbl-button nbl-button_style_ran">
                    <div onClick={getMore} className="nbl-button__primaryText">Показать еще</div>
                  </button>
                </div>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Movies;
