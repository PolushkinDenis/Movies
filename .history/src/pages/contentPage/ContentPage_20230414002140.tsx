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
          <video src="blob:https://www.ivi.ru/e50d499b-dff0-46ba-94d2-ebdc47f3dde0"></video>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
