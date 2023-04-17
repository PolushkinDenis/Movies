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
          <video src="https://www.youtube.com/watch?v=YgYx8Y6Vbck&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=28"></video>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
