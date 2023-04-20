import React, { FC, useEffect } from "react";
import MyButton from "../../components/UI/Button/MyButton";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { testSlice } from "../../store/slices/testSlice";
import { IoIosArrowDown } from "react-icons/io";
import "./Movies.scss";
import NewMoviesSlider from "../../components/newMoviesSlider/NewMoviesSlider";
import premieres_img from '../../images/newMoviesSlider/premieres.png'

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

//Даные с Бека
const newFilmsData  = [
  { href: "https://www.ivi.ru/collections/new-movies", imgHref: "https://thumbs.dfs.ivi.ru/storage33/contents/b/1/abbeaa2d5c95b43afa0f740e0d0e2a.png/604x406/?q=85", title: "Премьеры на Иви" },
  { href: "https://www.ivi.ru/collections/new-movies", imgHref: "https://thumbs.dfs.ivi.ru/storage33/contents/b/1/abbeaa2d5c95b43afa0f740e0d0e2a.png/604x406/?q=85", title: "Новинки подписки" },
  { href: "https://www.ivi.ru/collections/new-movies", imgHref: "https://thumbs.dfs.ivi.ru/storage33/contents/b/1/abbeaa2d5c95b43afa0f740e0d0e2a.png/604x406/?q=85", title: "Лучшее в подписке" },
  { href: "https://www.ivi.ru/collections/new-movies", imgHref: "https://thumbs.dfs.ivi.ru/storage33/contents/b/1/abbeaa2d5c95b43afa0f740e0d0e2a.png/604x406/?q=85", title: "Российские новинки" },
  { href: "https://www.ivi.ru/collections/new-movies", imgHref: "https://thumbs.dfs.ivi.ru/storage33/contents/b/1/abbeaa2d5c95b43afa0f740e0d0e2a.png/604x406/?q=85", title: "Российские" },
  { href: "https://www.ivi.ru/collections/new-movies", imgHref: "https://thumbs.dfs.ivi.ru/storage33/contents/b/1/abbeaa2d5c95b43afa0f740e0d0e2a.png/604x406/?q=85", title: "Зарубежные новинки" },
  { href: "https://www.ivi.ru/collections/new-movies", imgHref: "https://thumbs.dfs.ivi.ru/storage33/contents/b/1/abbeaa2d5c95b43afa0f740e0d0e2a.png/604x406/?q=85", title: "Лучшие новинки" },
  { href: "https://www.ivi.ru/collections/new-movies", imgHref: "https://thumbs.dfs.ivi.ru/storage33/contents/b/1/abbeaa2d5c95b43afa0f740e0d0e2a.png/604x406/?q=85", title: "Бесплатные новинки" },
]

function Movies() {
  const [conClickToggle, setConClickToggle] = React.useState(false);
  function clickToggle(e: any) {
    setConClickToggle(!conClickToggle);
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
                      conClickToggle
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
                  {conClickToggle ? "Свернуть" : "Развернуть"}
                </span>
              </div>
            </div>
          </section>
          <section className="filtersDesktop">
            <div className="filtersDesktop__content">
              <div className="filtersDesktop__plank-list">
                <div className="filtersDesktop__plank-item">
                  <div className="filtersDesktop__plank">
                    <MyButton classes="nbl-plank">
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
              <div className="filtersDesktop__button-container"></div>
            </div>
          </section>
          <section className="pageSection">
            <div className="pageSection__container">
              <div className="gallery">
                <div className="gallery__header">
                  <span className="gallery__headerLink">Фильмы-новинки</span>
                </div>
                <div className="gallery__viewport-inner">
                  <NewMoviesSlider data={newFilmsData} breakpoints={{
                    395: {
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                      spaceBetween: 10,
                    },
                    745: {
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                      spaceBetween: 10,
                    },
                    920: {
                      slidesPerView: 4,
                      slidesPerGroup: 4,
                      spaceBetween: 10,
                    },
                  }} />
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
