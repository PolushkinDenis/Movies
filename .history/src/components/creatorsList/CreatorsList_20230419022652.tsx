import { FC } from 'react';

const CreatorsList: FC = () => {
  return (
    <div className="creatorsList _container">
      <h1 className="creatorsList__title">Актёры и создатели</h1>
      <ul className="creatorsList__list">
        <li className="creatorsList__list-item">
          <img />
          <p>
            Джерард
            <br />
            Батлер
          </p>
          <div></div>
        </li>
      </ul>
    </div>
  );
};

export default CreatorsList;
