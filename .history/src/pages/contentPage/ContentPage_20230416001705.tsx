import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { BiBell } from 'react-icons/bi';
import { TbDownload } from 'react-icons/tb';
import { TbFlag3 } from 'react-icons/tb';
import { TbFlag3Filled } from 'react-icons/tb';
import { TbPlayerPlay } from 'react-icons/tb';

const ContentPage: FC = () => {
  return (
    <div className="contentPage">
      <div className="contentPage__container _container">
        {/* <div>
          <ul>
            <li>
              <Link to="">Мультфильмы</Link>
            </li>
            <li>
              <Link to="">Для детей</Link>
            </li>
          </ul>
          <div>бесплатно</div>
        </div> */}
        <div className="contentPage__container-inner">
          <div className="contentPage__player">
            <video controls>
              <source src="https://www.youtube.com/watch?v=nLQ-9vfEjUI" type="video/mp4" />
            </video>
            <ul className="contentPage__player-userButtons">
              <li className="userButton-trailer">
                <TbPlayerPlay />
                Трейлер
              </li>
              <li className="userButton-nbl">
                <TbFlag3 />
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
                <li className="watchParams__paramsList-link">
                  <a>Россия</a>
                </li>
                <li className="watchParams__paramsList-link">
                  <a>Для детей</a>
                </li>
                <li className="watchParams__paramsList-link">
                  <a>Комедия</a>
                </li>
                <li className="watchParams__paramsList-link">
                  <a>Приключения</a>
                </li>
              </ul>
              <div className="watchParams__paramsList">
                <div>FullHD</div>
                <div>Рус</div>
              </div>
            </div>
            <ul>
              <li>
                <div>7,5</div>
                <div>Рейтинг Иви</div>
              </li>
              <li>
                <div>
                  <img src="https://thumbs.dfs.ivi.ru/storage4/contents/8/2/7446fac40d54f51e263118abf1f257.jpg/44x44/?q=85" />
                </div>
                <div>Михаил Черняк</div>
              </li>
              <li>
                <div>
                  <img src="https://thumbs.dfs.ivi.ru/storage8/contents/1/d/350f6cb6a7ccc414fad70ebe3f27d9.jpg/44x44/?q=85" />
                </div>
                <div>Екатерина Гороховская</div>
              </li>
              <li>
                <div>
                  <img src="https://thumbs.dfs.ivi.ru/storage8/contents/4/e/2a8b57dd52f560df9ee405eb1c0bd2.jpg/44x44/?q=85" />
                </div>
                <div>Елена Шульман</div>
              </li>
              <li>
                <div>
                  <img src="https://thumbs.dfs.ivi.ru/storage28/contents/d/c/013aab1621373e6b8d6dc459ddeeea.jpg/44x44/?q=85" />
                </div>
                <div>Наталья Данилова</div>
              </li>
            </ul>
            <p>
              Симпатичное существо, которое только недавно родилось и упало на Землю, еще не знает,
              что он – Лунтик. Но ему уже страшно в незнакомом мире, неуютно, да к тому же все
              почему-то с криками убегают от него. Напуганный сиреневый пушистик успокаивается, лишь
              забравшись на высокий камень и увидев такую родную ему и красивую луну…
            </p>
            <span>Детали о мультфильме </span>
            <div>
              <div>7,5</div>
              <div>
                <div>Рейтинг Иви</div>
                <div>Интересный сюжет</div>
                <div>73 465 оценок</div>
              </div>
              <button>Оценить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
