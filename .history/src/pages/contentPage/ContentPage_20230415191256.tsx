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
          <video controls>
            <source src="https://www.youtube.com/watch?v=MVPTGNGiI-4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
