import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const ContentPage: FC = () => {
  return (
    <div className="contentPage">
      <div className="contentPage__container _container">
        <ul>
          <li>
            <Link to={''}></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContentPage;
