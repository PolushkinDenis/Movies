import React from "react";
import "./HeaderBar.scss";
import { useTranslation } from "react-i18next";
import TabBar from "../../UI/Button/TabBar";
import { AutoContext } from "../../../context/";

function HeaderBar() {
  const { activeGenres, activeCountries } = React.useContext(AutoContext);
  const [onClickToggle, setOnClickToggle] = React.useState<boolean>(false);
  function clickToggle() {
    setOnClickToggle(!onClickToggle);
  }
  //Translation
  const { t } = useTranslation();
  return (
    <section className="headerBar">
      <div className="headerBar__controls">
        <div className="headerBar__nav">
          <ul className="breadCrumbs breadCrumbs_classic headerBar__breadCrumbs">
            {activeGenres.length === 0 && activeCountries.length === 0 ? (
              <>
                <li className="breadCrumbs__item">
                  <TabBar
                    classes={
                      "nbl-link nbl-link_style_chaf breadCrumbs__nbl-link"
                    }
                    toLink={"/"}
                  >
                    <span>Мой Иви</span>
                  </TabBar>
                </li>
                <li className="breadCrumbs__item">Фильмы</li>
              </>
            ) : (
              <>
                <li className="breadCrumbs__item">
                  <TabBar
                    classes={
                      "nbl-link nbl-link_style_chaf breadCrumbs__nbl-link"
                    }
                    toLink={"/"}
                  >
                    <span>Мой Иви</span>
                  </TabBar>
                </li>
                <li className="breadCrumbs__item">
                  <TabBar
                    classes={
                      "nbl-link nbl-link_style_chaf breadCrumbs__nbl-link"
                    }
                    toLink={"/movies"}
                  >
                    <span>Фильмы</span>
                  </TabBar>
                </li>
                <li className="breadCrumbs__item">
                  {activeGenres.length !== 0
                    ? activeGenres
                        .slice(0, 3)
                        .reduce((accumulator, item, index) => {
                          if (accumulator.length === 0) {
                            return item.genreNameRu;
                          } else if (index === 2) {
                            console.log(1);
                            return (
                              accumulator + ", " + item.genreNameRu + "..."
                            );
                          } else {
                            return accumulator + ", " + item.genreNameRu;
                          }
                        }, "")
                    : activeCountries
                        .slice(0, 3)
                        .reduce((accumulator, item, index) => {
                          if (accumulator.length === 0) {
                            return item.countryNameRu;
                          } else if (index === 2) {
                            console.log(1);
                            return (
                              accumulator + ", " + item.countryNameRu + "..."
                            );
                          } else {
                            return accumulator + ", " + item.countryNameRu;
                          }
                        }, "")}
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="headerBar__textInfo">
        <div className="headerBar__title">{t("Фильмы смотреть онлайн")}</div>
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
                <a title="Смотреть фильмы 2018 года онлайн" href="/movies/2018">
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
                <a title="Лучшие драмы смотреть онлайн" href="/movies/drama">
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
  );
}

export default HeaderBar;
