import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const ContentPage: FC = () => {
  return (
    <div className="contentPage">
      <div className="contentPage__container _container">
        <div>
          <ul>
            <li>
              <Link to="">Сериалы</Link>
            </li>
            <li>
              <Link to="">Исторические</Link>
            </li>
          </ul>
          <div>бесплатно</div>
        </div>
        <div className="contentPage__container-inner">
          <div>
            <video controls>
              <source src="https://www.youtube.com/watch?v=nLQ-9vfEjUI" type="video/mp4" />
            </video>
            <ul>
              <li>Трейлер</li>
              <li>
                <img />
              </li>
              <li>
                <img />
              </li>
              <li>
                <img />
              </li>
            </ul>
          </div>
          <div>
            <h1>Лунтик и его друзья (Мультфильм 2006)</h1>
            <div>
              <div>
                <a>2006-2016</a>
                <div>8 сезонов</div>
              </div>
              <ul>
                <li>
                  <a>Россия</a>
                </li>
                <li>
                  <a>Для детей</a>
                </li>
                <li>
                  <a>Комедия</a>
                </li>
                <li>
                  <a>Приключения</a>
                </li>
              </ul>
              <div>
                <div>FullHD</div>
                <div>Рус</div>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;