import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const ContentPage: FC = () => {
  return (
    <div className="contentPage">
      <div className="contentPage__container _container">
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
    </div>
  );
};

export default ContentPage;
