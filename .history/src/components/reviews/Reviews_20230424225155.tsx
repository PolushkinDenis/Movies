import { FC } from 'react';
import { Link } from 'react-router-dom';

const Reviews: FC = () => {
  return (
    <div className="review">
      <div>
        <Link to="">
          Отзывы
          <div>83</div>
        </Link>
        <p></p>
      </div>
      <button>Оставить отзыв</button>
    </div>
  );
};

export default Reviews;