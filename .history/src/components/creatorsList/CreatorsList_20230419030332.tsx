import { FC } from 'react';
import { Link } from 'react-router-dom';

const creatorsTest = [
  {
    imageUrl:
      'https://thumbs.dfs.ivi.ru/storage8/contents/8/0/f2bb1758a4e0bfa76ae774ceeb2cd4.jpg/88x88/?q=85',
    name: 'Джерард Батлер',
    role: 'актёр',
  },
  {
    imageUrl:
      'https://thumbs.dfs.ivi.ru/storage4/contents/a/0/e3c4a8e6b23211573b42b7e9fc11da.jpg/88x88/?q=85',
    name: 'Майк Колтер',
    role: 'актёр',
  },
  {
    imageUrl:
      'https://thumbs.dfs.ivi.ru/storage26/contents/f/f/a419f500c236b38eb3d22aa450fdd4.jpg/88x88/?q=85',
    name: 'Тони Голдуин',
    role: 'актёр',
  },
  {
    imageUrl:
      'https://thumbs.dfs.ivi.ru/storage8/contents/8/0/f2bb1758a4e0bfa76ae774ceeb2cd4.jpg/88x88/?q=85',
    name: 'Джерард Батлер',
    role: 'актёр',
  },
  {
    imageUrl:
      'https://thumbs.dfs.ivi.ru/storage4/contents/a/0/e3c4a8e6b23211573b42b7e9fc11da.jpg/88x88/?q=85',
    name: 'Майк Колтер',
    role: 'актёр',
  },
  {
    imageUrl:
      'https://thumbs.dfs.ivi.ru/storage26/contents/f/f/a419f500c236b38eb3d22aa450fdd4.jpg/88x88/?q=85',
    name: 'Тони Голдуин',
    role: 'актёр',
  },
  {
    imageUrl:
      'https://thumbs.dfs.ivi.ru/storage8/contents/8/0/f2bb1758a4e0bfa76ae774ceeb2cd4.jpg/88x88/?q=85',
    name: 'Джерард Батлер',
    role: 'актёр',
  },
  {
    imageUrl:
      'https://thumbs.dfs.ivi.ru/storage4/contents/a/0/e3c4a8e6b23211573b42b7e9fc11da.jpg/88x88/?q=85',
    name: 'Майк Колтер',
    role: 'актёр',
  },
  {
    imageUrl:
      'https://thumbs.dfs.ivi.ru/storage26/contents/f/f/a419f500c236b38eb3d22aa450fdd4.jpg/88x88/?q=85',
    name: 'Тони Голдуин',
    role: 'актёр',
  },
];

const CreatorsList: FC = () => {
  return (
    <div className="creatorsList _container">
      <Link to="" className="creatorsList__title">
        Актёры и создатели
      </Link>
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
          <div className="creatorsList__list-item-role">актер</div>
        </li>
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
          <div className="creatorsList__list-item-role">актер</div>
        </li>
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
          <div className="creatorsList__list-item-role">актер</div>
        </li>
      </ul>
    </div>
  );
};

export default CreatorsList;
