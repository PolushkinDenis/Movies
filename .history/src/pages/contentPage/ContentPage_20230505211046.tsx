import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiBell } from 'react-icons/bi';
import { TbDownload } from 'react-icons/tb';
import { TbFlag3 } from 'react-icons/tb';
import { TbFlag3Filled } from 'react-icons/tb';
import { TbPlayerPlay } from 'react-icons/tb';
import { BsCollectionPlayFill } from 'react-icons/bs';
import { IoPlayOutline } from 'react-icons/io5';
import ModalRating from '../../components/modalRating/ModalRating';
import CreatorsList from '../../components/creatorsList/CreatorsList';
import RecommendSwiper from '../../components/recommendSwiper/RecommendSwiper';
import Additional from '../../components/additional/Additional';
import Reviews from '../../components/reviews/Reviews';
import ViewOnDevices from '../../components/viewOnDevices/ViewOnDevices';

const ContentPage: FC = () => {
  const [info, setInfo] = useState<boolean>(false);
  const [flag, setFlag] = useState<boolean>(false);
  const [rating, setRating] = useState<boolean>(false);

  const showMoreInfo = () => {
    setInfo(!info);
  };

  return (
    <div className="contentPage">
      <div className="contentPage__container _container">
        <div className="contentPage__container-inner">
          <div className="contentPage__container-inner-info">
            <div>
              <ul className="contentPage__info-watchMedallions">
                <li className="watchMedallions__item">
                  <div className="watchMedallions__item-rate">
                    <div>7,5</div>
                  </div>
                  <div className="watchMedallions__item-title">Рейтинг Иви</div>
                </li>
                <li className="watchMedallions__item">
                  <div className="watchMedallions__item-photo">
                    <img src="https://thumbs.dfs.ivi.ru/storage4/contents/8/2/7446fac40d54f51e263118abf1f257.jpg/44x44/?q=85" />
                  </div>
                  <div className="watchMedallions__item-title">Михаил Черняк</div>
                </li>
                <li className="watchMedallions__item">
                  <div className="watchMedallions__item-photo">
                    <img src="https://thumbs.dfs.ivi.ru/storage8/contents/1/d/350f6cb6a7ccc414fad70ebe3f27d9.jpg/44x44/?q=85" />
                  </div>
                  <div className="watchMedallions__item-title">Екатерина Гороховская</div>
                </li>
                <li className="watchMedallions__item">
                  <div className="watchMedallions__item-photo">
                    <img src="https://thumbs.dfs.ivi.ru/storage8/contents/4/e/2a8b57dd52f560df9ee405eb1c0bd2.jpg/44x44/?q=85" />
                  </div>
                  <div className="watchMedallions__item-title">Елена Шульман</div>
                </li>
                <li className="watchMedallions__item">
                  <div className="watchMedallions__item-photo">
                    <img src="https://thumbs.dfs.ivi.ru/storage28/contents/d/c/013aab1621373e6b8d6dc459ddeeea.jpg/44x44/?q=85" />
                  </div>
                  <div className="watchMedallions__item-title">Наталья Данилова</div>
                </li>
              </ul>
              <a
                href="https://www.ivi.ru/collections/free-movies"
                className="contentPage__info-freeFilmsLink">
                <BsCollectionPlayFill />
                Бесплатные фильмы
              </a>
              <div className="contentPage__info-watchDescription watchDescription1160">
                <p className="watchDescription__desc1">
                  Симпатичное существо, которое только недавно родилось и упало на Землю, еще не
                  знает, что он – Лунтик. Но ему уже страшно в незнакомом мире, неуютно, да к тому
                  же все почему-то с криками убегают от него. Напуганный сиреневый пушистик
                  успокаивается, лишь забравшись на высокий камень и увидев такую родную ему и
                  красивую луну…
                </p>
                {info && (
                  <p className="watchDescription__desc2">
                    Посмотреть мультфильм Лунтик и его друзья 1 сезон 1 серия онлайн вы можете
                    совершенно бесплатно на русском языке в хорошем HD качестве. Приятного
                    просмотра!
                  </p>
                )}
                <span onClick={showMoreInfo} className="contentPage__info-more">
                  {info ? 'Свернуть детали' : 'Детали о мультфильме'}
                </span>
              </div>
              <div onClick={() => setRating(true)} className="contentPage__info-ratingMobile">
                <div className="ratingMobile__rating">7,5</div>
                <div className="ratingMobile__info">
                  <div className="ratingMobile__info-title">Рейтинг Иви</div>
                  <div className="ratingMobile__info-subtitle">Интересный сюжет</div>
                </div>
                <button className="ratingMobile__rateBtn">Оценить</button>
              </div>
              <div>
                <div className="contentPage__info-options">
                  <div className="contentPage__info-options-title">Языки</div>
                  <div className="contentPage__info-options-values">Русский, Английский</div>
                </div>
                <div className="contentPage__info-options">
                  <div className="contentPage__info-options-title">Субтитры</div>
                  <div className="contentPage__info-options-values">Английский, Русский</div>
                </div>
                <div className="contentPage__info-options">
                  <div className="contentPage__info-options-title">Качество</div>
                  <ul>
                    <li>FullHD</li>
                    <li>HD</li>
                    <li>1080</li>
                    <li>720</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contentPage__userButtons">
              <button>
                <IoPlayOutline />
                Трейлер
              </button>
              <div>
                <button>{flag ? <TbFlag3Filled /> : <TbFlag3 />}</button>
                <button>
                  {' '}
                  <TbDownload />
                </button>
              </div>
            </div>
          </div>
          <div className="contentPage__player">
            <video controls>
              <source src="https://www.youtube.com/watch?v=nLQ-9vfEjUI" type="video/mp4" />
            </video>
            <ul className="contentPage__player-userButtons">
              <li className="userButton-trailer">
                <TbPlayerPlay />
                Трейлер
              </li>
              <li onClick={() => setFlag(!flag)} className="userButton-nbl">
                {flag ? <TbFlag3Filled /> : <TbFlag3 />}
              </li>
              <li className="userButton-pull">
                <BiBell />
              </li>
              <li className="userButton-share">
                <TbDownload />
              </li>
            </ul>
          </div>
          <div className="contentPage__info">
            <h1 className="contentPage__info-title">Лунтик и его друзья 1 сезон 1 серия</h1>
            <div className="contentPage__info-watchParams">
              <div className="watchParams__paramsList">
                <a className="watchParams__paramsList-link">2006-2016</a>
                <div className="watchParams__paramsList-item">8 сезонов</div>
              </div>
              <ul className="watchParams__paramsList">
                <li>
                  <a className="watchParams__paramsList-link">Россия</a>
                </li>
                <li>
                  <a className="watchParams__paramsList-link">Для детей</a>
                </li>
                <li>
                  <a className="watchParams__paramsList-link">Комедия</a>
                </li>
                <li>
                  <a className="watchParams__paramsList-link">Приключения</a>
                </li>
              </ul>
              <div className="watchParams__paramsList">
                <div className="watchParams__paramsList-quality">FullHD</div>
                <div className="watchParams__paramsList-item">Рус</div>
              </div>
            </div>
            <ul className="contentPage__info-watchMedallions watchMedallions__1160">
              <li className="watchMedallions__item">
                <div className="watchMedallions__item-rate">
                  <div>7,5</div>
                </div>
                <div className="watchMedallions__item-title">Рейтинг Иви</div>
              </li>
              <li className="watchMedallions__item">
                <div className="watchMedallions__item-photo">
                  <img src="https://thumbs.dfs.ivi.ru/storage4/contents/8/2/7446fac40d54f51e263118abf1f257.jpg/44x44/?q=85" />
                </div>
                <div className="watchMedallions__item-title">Михаил Черняк</div>
              </li>
              <li className="watchMedallions__item">
                <div className="watchMedallions__item-photo">
                  <img src="https://thumbs.dfs.ivi.ru/storage8/contents/1/d/350f6cb6a7ccc414fad70ebe3f27d9.jpg/44x44/?q=85" />
                </div>
                <div className="watchMedallions__item-title">Екатерина Гороховская</div>
              </li>
              <li className="watchMedallions__item">
                <div className="watchMedallions__item-photo">
                  <img src="https://thumbs.dfs.ivi.ru/storage8/contents/4/e/2a8b57dd52f560df9ee405eb1c0bd2.jpg/44x44/?q=85" />
                </div>
                <div className="watchMedallions__item-title">Елена Шульман</div>
              </li>
              <li className="watchMedallions__item">
                <div className="watchMedallions__item-photo">
                  <img src="https://thumbs.dfs.ivi.ru/storage28/contents/d/c/013aab1621373e6b8d6dc459ddeeea.jpg/44x44/?q=85" />
                </div>
                <div className="watchMedallions__item-title">Наталья Данилова</div>
              </li>
            </ul>
            <div className="contentPage__info-watchDescription watchDescription1160">
              <p className="watchDescription__desc1">
                Симпатичное существо, которое только недавно родилось и упало на Землю, еще не
                знает, что он – Лунтик. Но ему уже страшно в незнакомом мире, неуютно, да к тому же
                все почему-то с криками убегают от него. Напуганный сиреневый пушистик
                успокаивается, лишь забравшись на высокий камень и увидев такую родную ему и
                красивую луну…
              </p>
              {info && (
                <p className="watchDescription__desc2">
                  Посмотреть мультфильм Лунтик и его друзья 1 сезон 1 серия онлайн вы можете
                  совершенно бесплатно на русском языке в хорошем HD качестве. Приятного просмотра!
                </p>
              )}
            </div>
            {info && (
              <div className="contentPage__info-watchOptions watchOptions1160">
                <div className="watchOptions__title">Языки</div>
                <div className="watchOptions__value">Русский</div>
                <p className="watchOptions__description">
                  <span>Изображение и звук.</span> Фактическое качество зависит от устройства и
                  ограничений правообладателя.
                </p>
                <ul className="watchOptions__quality">
                  <li>FullHD</li>
                  <li>HD</li>
                  <li>1080</li>
                  <li>720</li>
                </ul>
              </div>
            )}
            <span onClick={showMoreInfo} className="contentPage__info-more more1160">
              {info ? 'Свернуть детали' : 'Детали о мультфильме'}
            </span>
            <div
              onClick={() => setRating(true)}
              className="contentPage__info-ratingMobile ratingMobile1160">
              <div className="ratingMobile__rating">7,5</div>
              <div className="ratingMobile__info">
                <div className="ratingMobile__info-title">Рейтинг Иви</div>
                <div className="ratingMobile__info-subtitle">Интересный сюжет</div>
                <div className="ratingMobile__info-extra">73 465 оценок</div>
              </div>
              <button className="ratingMobile__rateBtn">Оценить</button>
            </div>
          </div>
        </div>
        <RecommendSwiper />
        <CreatorsList />
        <Additional />
        <Reviews />
        <ViewOnDevices />
        <ModalRating activeModal={rating} setActiveModal={setRating} />
      </div>
    </div>
  );
};

export default ContentPage;
