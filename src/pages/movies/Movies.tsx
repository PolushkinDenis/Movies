import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Movies.scss";
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

  function clickFilterClose(e: any) {
    if (!e.target.closest(".filtersDesktop__plank")) {
      setClickSwitchFilter("");
    }
    if (
      !e.target.closest(".catalogControlPanel__pageSection") &&
      clickToggleSorting === true
    ) {
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
        </div>
      </main>
    </div>
  );
}

export default Movies;
