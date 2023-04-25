import React, { FC, useEffect, useState } from "react";
import "./Main.scss";
import PromoSlider from "../../components/promoSlider/PromoSlider";
import TopSlider from "../../components/topSlider/TopSlider";
import { topFilms } from "../../data/topFilms";

const promoData = [
  { href: "https://www.ivi.ru/collections/this-is-the-end", imgHref: "https://thumbs.dfs.ivi.ru/storage5/contents/0/3/99372bba75f4652a5d4b2f6a7d2ca3.jpg/1216x524/?q=85", title: "Это всего лишь конец света", synopsis: "Самые зрелищные и масштабные фильмы-катастрофы" },
  { href: "https://www.ivi.ru/collections/meditsinskie-serialyi", imgHref: "https://thumbs.dfs.ivi.ru/storage6/contents/5/5/03a8751c356b28a8dbf9a8a798be87.jpg/1216x524/?q=85", title: "Очень хорошие доктора", synopsis: "Лучшие медицинские сериалы для фанатов жанра" },
  { href: "https://www.ivi.ru/collections/ivi-originals", imgHref: "https://thumbs.dfs.ivi.ru/storage37/contents/0/a/1d3381c9a1549a24212f58b8c2495b.jpg/1216x524/?q=85", title: "Создано Иви", synopsis: "Целый вагон впечатлений и тележка эмоций: все проекты производства Иви в одном месте. Запрыгивай!" },
  { href: "https://www.ivi.ru/collections/amediateka-vesna-vremya-lyubvi", imgHref: "https://thumbs.dfs.ivi.ru/storage6/contents/e/b/419c834059e49aa440f3bfdaaaacc6.jpg/1216x524/?q=85", title: "Весна — время любви", synopsis: "Лучшие романтические сериалы о настоящей любви" },
]

const Main: FC = () => {
  const [onClickToggle, setOnClickToggle] = React.useState(false);
  return (
    <main className="main">
      <div className="promo">
        <PromoSlider promos={promoData} />
      </div>
      <section className="pageSection__main">
        <div className="pageSection__main__container">
          <ul className="home__teaserList">
            <li className="home__teaserPlate">
              <div className="nbl-teaserTile__content nbl-teaserTile__content__subscribe">
                <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg" />
                <div className="nbl-teaserTile__caption">30 дней подписки за 1 ₽</div>
              </div>
            </li>
            <li className="home__teaserPlate">
              <div className="nbl-teaserTile__content">
                <img className="teaserPlate__img" src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/gift.svg" />
                <div className="nbl-teaserTile__caption">Активировать сертификат</div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="pageSection home__pageSection">
        <div className="pageSection__container">
          <div className="pageSection__container-inner">
            <div className="clause clause_is-native home__clause">
              <div className="clause__header">
                <h2 className="clause__title">
                  Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие
                </h2>
              </div>
              <div className="clause__text is-truncated">
                <div className={
                      onClickToggle
                        ? "clause__text-inner"
                        : "clause__text-inner hidden-children"
                    }>
                  <p>Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь –
                    и вы наверняка один из них! А раз так, то Иви – это именно тот ресурс, который вам нужен.
                    От лучших кинолент в HD-качестве вас отделяет буквально один клик. Мы не просто освобождаем
                    от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего
                    ресурса гораздо больше возможностей.
                  </p>
                  <p>Видеотека Иви – это постоянно пополняющаяся
                    коллекция в рунете, которая насчитывает более 60 тысяч отечественного и зарубежного
                    контента, доступного для просмотра онлайн. Мы первыми в России подписали контракты с
                    крупнейшими голливудскими студиями (Walt Disney, Warner Bros., Sony, 20th Century Fox,
                    Universal, Paramount, MGM и другими) и на постоянной основе сотрудничаем с крупнейшими
                    российскими компаниями и телеканалами.
                  </p>
                  <p>Онлайн-кинотеатр ivi.ru – это:</p>
                  <ol>
                    <li>уникальная рекомендательная система, учитывающая ваши предпочтения и предлагающая
                      посмотреть именно то, что точно придется вам по душе;
                    </li>
                    <li>просмотр в одно касание на любом из устройств, подключенном к вашему Иви-аккаунту –
                      от смартфонов до телевизоров с технологией Smart TV;
                    </li>
                    <li>возможность скачивать в память мобильного устройства лицензионный контент и смотреть
                      его без доступа к Интернету;
                    </li>
                    <li>уникальные условия и преимущества для обладателей подписки Иви, делающей кинопросмотр
                      комфортным и приятным;
                    </li>
                    <li>удобная и продвинутая система уведомлений, вы не пропустите выход крутого обсуждаемого
                      блокбастера – мы известим о появлении подходящим для вас способом;
                    </li>
                    <li>возможность добавлять фильмы в «смотреть позже», чтобы вернуться к ним в свободное время;
                    </li>
                    <li>контент, для просмотра которого не требуется устанавливать видеоплееры или искать
                      кодеки;
                    </li>
                    <li>просмотр онлайн контента хорошего разрешения без регистрации и смс.
                    </li>
                  </ol>
                  <p>Откройте для себя возможность смотреть фильмы онлайн бесплатно в отличном качестве с
                    кинотеатром Иви!
                  </p>
                </div>
                <span onClick={() => setOnClickToggle(!onClickToggle)} className="clause__toggle">Свернуть</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pageSection home__pageSection">
        <div className="pageSection__container">
          <div className="gallery__top">
            <div className="gallery__blockHeader">
              <div className="gallery__imageHeader">
                <img src="https://solea-parent.dfs.ivi.ru/picture/bypass/top10.svg" />
                <span>за неделю</span>
              </div>
            </div>
            <div className="top_slider">
              <TopSlider topFilms={topFilms} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
