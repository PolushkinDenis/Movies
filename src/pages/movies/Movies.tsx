import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Movies.scss";
import NewMoviesSlider from "../../components/newMoviesSlider/NewMoviesSlider";
import FiltersDesktop from "../../components/main/filter/FiltersDesktop";
import Sorting from "../../components/main/sorting/Sorting";
import HeaderBar from "../../components/main/headerBar/HeaderBar";


function Movies() {
  // Countries,Genres,Rating,Evaluations,SearchDirector,SearchActor
  const [clickSwitchFilter, setClickSwitchFilter] = React.useState<
    string | null
  >("");
  const [activeGenres, setActiveGenres] = React.useState<string[]>([]);
  const [activeCountries, setActiveCountries] = React.useState<string[]>([]);
  const [clickToggleSorting, setClickToggleSorting] =
    React.useState<boolean>(false);
  console.log(true);

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
  //Translation
  const { t } = useTranslation();
  return (
    <div>
      <main className="main">
        <div className="main__container _container">
          <section className="section-advertisement">{t("Реклама")}</section>
          <HeaderBar
            activeGenres={activeGenres}
            setActiveGenres={setActiveGenres}
            activeCountries={activeCountries}
            setActiveCountries={setActiveCountries}
          ></HeaderBar>
          <Sorting
            clickToggleSorting={clickToggleSorting}
            setClickToggleSorting={setClickToggleSorting}
          ></Sorting>
          <FiltersDesktop
            clickSwitchFilter={clickSwitchFilter}
            setClickSwitchFilter={setClickSwitchFilter}
            activeGenres={activeGenres}
            setActiveGenres={setActiveGenres}
            activeCountries={activeCountries}
            setActiveCountries={setActiveCountries}
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
        </div>
      </main>
    </div>
  );
}

export default Movies;
