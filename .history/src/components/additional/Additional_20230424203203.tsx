import { FC } from 'react';

const Additional: FC = () => {
  return (
    <div className="additional">
      <h1 className="additional__title">Трейлеры и доп. материалы</h1>
      <ul className="additional__list">
        <li className="additional__list-item">
          <div className="additional__list-item-image">
            <img
              src="https://thumbs.dfs.ivi.ru/storage15/contents/a/e/0e0a84f2004dcedeff5cad12322f89.jpg/784x440/?q=85"
              alt="additional"
            />
          </div>
          <div className="additional__list-item-desc">Вступительные титры</div>
          <div className="additional__list-item-time">20 сек.</div>
        </li>
      </ul>
    </div>
  );
};

export default Additional;