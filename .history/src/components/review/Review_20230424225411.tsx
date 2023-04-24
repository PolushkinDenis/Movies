import { FC } from 'react';
import { Link } from 'react-router-dom';

const Review: FC = () => {
  return (
    <div className="review">
      <div className="review__container">
        <Link to="" className="review__container-link">
          Отзывы
          <div>83</div>
        </Link>
        <p className="review__container-desc">о мультфильме «Смешарики»</p>
      </div>
      <button>Оставить отзыв</button>
    </div>
  );
};

export default Review;
