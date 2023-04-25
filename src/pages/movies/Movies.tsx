import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Movies.scss";
import FiltersDesktop from "../../components/main/filter/FiltersDesktop";
import Sorting from "../../components/main/sorting/Sorting";

function Movies() {
  // Countries,Genres,Rating,Evaluations,SearchDirector,SearchActor
  const [clickSwitchFilter, setClickSwitchFilter] = React.useState<
    string | null
  >("");

  const [onClickToggle, setOnClickToggle] = React.useState<boolean>(false);
  function clickToggle() {
    setOnClickToggle(!onClickToggle);
  }

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
          <section className="headerBar">
            <div className="headerBar__textInfo">
              <div className="headerBar__title">
                {t("Фильмы смотреть онлайн")}
              </div>
              <div className="clause clause_is-native catalog__clause">
                <div className="clause__text">
                  <div
                    className={
                      onClickToggle
                        ? "clause__text-inner"
                        : "clause__text-inner hidden-children"
                    }
                  >
                    <p>
                      {t("Вы любите смотреть фи...")}{" "}
                      <a href="/movies/boeviki">{t("боевиков")}</a>{" "}
                      {t("или поклонница молодежных се...")}
                    </p>
                    <p>
                      {t("Выбор фильмов очень шир...")}{" "}
                      <a href="/movies/foreign">{t("зарубежного")}</a>{" "}
                      {t("производства? У нас их пр...")}{" "}
                      <a title="Российские фильмы онлайн" href="/movies/ru">
                        {t("российские фильмы")}
                      </a>
                      {t("? Что ж, и таких фи...")}{" "}
                      <a title="Фильмы новинки кинопроката онлайн" href="/new">
                        {t("новинки кинопроката")}
                      </a>
                      {t("? Неважно, каким б")}{" "}
                      <a
                        title="Смотреть фильмы 2018 года онлайн"
                        href="/movies/2018"
                      >
                        {t("2018 года")}
                      </a>{" "}
                      {t("и")}{" "}
                      <a title="Фильмы 2017 года" href="/movies/2017">
                        {t("фильмы 2017")}
                      </a>
                      .
                    </p>
                    <p>
                      {t("В нашем каталоге вы н...")}{" "}
                      <a
                        title="Фильмы про любовь - онлайн"
                        href="/collections/movies-about-love"
                      >
                        {t("фильмы про любовь")}
                      </a>
                      {t(", и детективы, и боевик...")}{" "}
                      <a
                        title="Лучшие фильмы про войну 1941-1945 онлайн"
                        href="/collections/movies-war-1941-1945"
                      >
                        {t("фильмы про войну")}
                      </a>
                      {t(", и ужасы, и трилле...")}{" "}
                      <a title="Русские сериалы онлайн" href="/series/ru">
                        {t("русские сериалы")}
                      </a>
                      .
                    </p>
                    <p>
                      {t("Если вас интересуют с...")}{" "}
                      <a
                        title="Лучшие драмы смотреть онлайн"
                        href="/movies/drama"
                      >
                        {t("драмы")}
                      </a>{" "}
                      {t("или лучший анимационны...")}
                    </p>
                    <p>{t("Не упустите замечательн...")}</p>
                  </div>
                </div>
                <span onClick={clickToggle} className="clause__toggle">
                  {onClickToggle ? t("Свернуть") : t("Развернуть")}
                </span>
              </div>
            </div>
          </section>
          <Sorting
            clickToggleSorting={clickToggleSorting}
            setClickToggleSorting={setClickToggleSorting}
          ></Sorting>
          <FiltersDesktop
            clickSwitchFilter={clickSwitchFilter}
            setClickSwitchFilter={setClickSwitchFilter}
          ></FiltersDesktop>
        </div>
      </main>
    </div>
  );
}

export default Movies;
