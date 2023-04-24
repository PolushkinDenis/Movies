import { FC } from 'react';
import { Link } from 'react-router-dom';

const Reviews: FC = () => {
  return (
    <>
      <div className="reviews">
        <div className="reviews__container">
          <Link to="" className="reviews__container-link">
            Отзывы
            <div>83</div>
          </Link>
          <p className="reviews__container-desc">о мультфильме «Смешарики»</p>
        </div>
        <button>Оставить отзыв</button>
      </div>
    </>
  );
};

export default Reviews;
