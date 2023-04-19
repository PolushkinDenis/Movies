import { FC } from 'react';

const CreatorsList: FC = () => {
  return (
    <div className="creatorsList _container">
      <h1 className="creatorsList__title">Актёры и создатели</h1>
      <ul className="creatorsList__list">
        <li className="creatorsList__list-item">
          <img
            src="https://thumbs.dfs.ivi.ru/storage8/contents/8/0/f2bb1758a4e0bfa76ae774ceeb2cd4.jpg/88x88/?q=85"
            alt="name"
            className="creatorsList__list-item-image"
          />
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
