import { FC } from 'react';

const CreatorsList: FC = () => {
  return (
    <div className="creatorsList _container">
      <h1 className="creatorsList__title">Актёры и создатели</h1>
      <ul className="creatorsList__list">
        <li className="creatorsList__list-item">
          <img className="creatorsList__list-item-image" />
          <p className="creatorsList__list-item-name">
            Джерард
            <br />
            Батлер
          </p>
          <div className="creatorsList__list-item-role"></div>
        </li>
      </ul>
    </div>
  );
};

export default CreatorsList;
