import React, { FC, useEffect } from "react";
import MyButton from "../../components/UI/Button/MyButton";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { testSlice } from "../../store/slices/testSlice";
import { IoIosArrowDown } from "react-icons/io";
import "./Movies.scss";

const janr = [
  "аниме",
  "биографический",
  "боевик",
  "вестерн",
  "военный",
  "детектив",
  "детский",
  "документальный",
  "драма",
  "исторический",
  "кинокомикс",
  "комедия",
  "концерт",
  "короткометражный",
  "криминал",
  "мелодрама",
  "мистика",
  "музыка",
  "мультфильм",
  "мюзикл",
  "научный",
  "нуар",
  "приключения",
  "реалити-шоу",
  "семейный",
  "спорт",
  "триллер",
  "ужасы",
  "фантастика",
  "фэнтези",
];

function Movies() {
  const [onClickToggle, setOnClickToggle] = React.useState(false);
  // Countries,Genres
  const [clickSwitchFilter, setClickSwitchFilter] = React.useState("");
  function clickToggle(e: any) {
    setOnClickToggle(!onClickToggle);
  }

  function clickToggleFilter(e: any) {
    setClickSwitchFilter("Genres");
  }

  return (
    <div>
      <main className="main">
        <div className="main__container _container">
          <section className="headerBar">
            <div className="headerBar__textInfo">
              <div className="headerBar__title">Фильмы смотреть онлайн</div>
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
                      Вы любите смотреть фильмы онлайн и проводите много
                      времени, прочесывая сайты в поисках чего-нибудь
                      интересного? Стоит задержаться на ivi.ru – фильмов,
                      которые собраны у нас, вам хватит надолго. Коллекция
                      постоянно пополняется как новыми фильмами, так и
                      признанными шедеврами прошлых лет! Независимо от того, кто
                      вы – любитель энергичных{" "}
                      <a href="/movies/boeviki">боевиков</a> или поклонница
                      молодежных сериалов, изобилие нашего каталога заставит вас
                      забыть обо всех других способах проведения досуга, и вы
                      будете пересматривать любимые фильмы онлайн снова и снова!
                    </p>
                    <p>
                      Выбор фильмов очень широк и многообразен, так что каждый
                      найдет для себя что-то интересное, каким бы ни были его
                      вкусы. Предпочитаете картины исключительно{" "}
                      <a href="/movies/foreign">зарубежного</a> производства? У
                      нас их предостаточно: это и золотая классика Голливуда, и
                      душевные французские комедии, и темпераментные итальянские
                      драмы, и шумные индийские музыкальные фильмы. А может, вы
                      патриот и любите{" "}
                      <a title="Российские фильмы онлайн" href="/movies/ru">
                        российские фильмы
                      </a>
                      ? Что ж, и таких фильмов у нас немало. Что вам больше по
                      вкусу – добрая старая классика или{" "}
                      <a title="Фильмы новинки кинопроката онлайн" href="/new">
                        новинки кинопроката
                      </a>
                      ? Неважно, каким будет ваш ответ – у нас есть все, как
                      картины эпохи зарождения кинематографа, так{" "}
                      <a
                        title="Смотреть фильмы 2018 года онлайн"
                        href="/movies/2018"
                      >
                        2018 года
                      </a>{" "}
                      и{" "}
                      <a title="Фильмы 2017 года" href="/movies/2017">
                        фильмы 2017
                      </a>
                      .
                    </p>
                    <p>
                      В нашем каталоге вы найдете любые жанры. Это и{" "}
                      <a
                        title="Фильмы про любовь - онлайн"
                        href="/collections/movies-about-love"
                      >
                        фильмы про любовь
                      </a>
                      , и детективы, и боевики, и вестерны, и фантастика, и
                      арт-хаус, и уморительные комедии, и{" "}
                      <a
                        title="Лучшие фильмы про войну 1941-1945 онлайн"
                        href="/collections/movies-war-1941-1945"
                      >
                        фильмы про войну
                      </a>
                      , и ужасы, и триллеры, и документалистика... Кроме
                      «полного метра» на сайте представлены также
                      короткометражные фильмы, а также иностранные и{" "}
                      <a title="Русские сериалы онлайн" href="/series/ru">
                        русские сериалы
                      </a>
                      .
                    </p>
                    <p>
                      Если вас интересуют самые знаковые фильмы онлайн в том или
                      ином жанре, система рубрикации поможет вам без труда
                      сориентироваться и найти, например, лучшие{" "}
                      <a
                        title="Лучшие драмы смотреть онлайн"
                        href="/movies/drama"
                      >
                        драмы
                      </a>{" "}
                      или лучший анимационный фильм онлайн.
                    </p>
                    <p>
                      Не упустите замечательную возможность смотреть фильмы
                      онлайн без регистрации, выбирая только то, что вам
                      действительно интересно, и тогда, когда вам это удобно.
                      Ведь это так просто и приятно!
                    </p>
                  </div>
                </div>
                <span onClick={clickToggle} className="clause__toggle">
                  {onClickToggle ? "Свернуть" : "Развернуть"}
                </span>
              </div>
            </div>
          </section>
          <section className="filtersDesktop">
            <div className="filtersDesktop__content">
              <div className="filtersDesktop__plank-list">
                <div className="filtersDesktop__plank-item">
                  <div className="filtersDesktop__plank isActive">
                    <MyButton onClick={clickToggleFilter} classes="nbl-plank">
                      <div className="nbl-plank__textWrapper">
                        <div className="nbl-plank__title">Жанры</div>
                      </div>
                      <div className="nbl-plank__icon">
                        <IoIosArrowDown></IoIosArrowDown>
                      </div>
                    </MyButton>
                    <div className="filterDropdown filterDropdown_genres">
                      <div className="filterDropdown__inner">
                        <div className="filterDropdown__content">
                          <div className="filterDropdown__list-container">
                            <ul className="filterDropdown__list">
                              {janr.map((item, index) => {
                                return (
                                  <li
                                    key={item + "-" + index}
                                    className="filterDropdown__item nbl-button__primaryText"
                                  >
                                    {item}
                                  </li>
                                );
                              })}
                              {/* <li className="filterDropdown__item filterDropdown__item_checkbox">
                          <label className="filterDropdown__label">
                            <input
                              type="checkbox"
                              className="filterDropdown__input"
                            />
                            <div className="filterDropdown__input-text">Артхаус</div>
                            <div className="filterDropdown__checkbox"></div>
                          </label>
                        </li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filtersDesktop__plank-item">
                  <div className="filtersDesktop__plank">
                    <MyButton classes="nbl-plank">
                      <div className="nbl-plank__textWrapper">
                        <div className="nbl-plank__title">Страны</div>
                      </div>
                      <div className="nbl-plank__icon">
                        <IoIosArrowDown></IoIosArrowDown>
                      </div>
                    </MyButton>
                  </div>
                </div>
              </div>
              <div className="filtersDesktop__button-container"></div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Movies;
