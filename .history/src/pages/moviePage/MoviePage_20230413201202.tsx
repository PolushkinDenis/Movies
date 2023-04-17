import { FC } from 'react';
import { Link } from 'react-router-dom';

const MoviePage: FC = () => {
  return (
    <div className="moviePage">
      <div className="moviePage__container _container">
        <div>
          <ul>
            <li>
              <Link to="">Сериалы</Link>
            </li>
            <li>
              <Link to="">Исторические</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
