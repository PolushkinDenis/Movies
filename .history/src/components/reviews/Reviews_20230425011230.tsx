import { FC } from 'react';
import { Link } from 'react-router-dom';
import Review from '../review/Review';
import Carousel from '../UI/carousel/Carousel';
import { SplideSlide } from '@splidejs/react-splide';

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
        <button className="reviews__btn">Оставить отзыв</button>
      </div>
      <Carousel perPage={4} perMove={3}>
        {new Array(4).map(() => (
          <SplideSlide>
            <Review />
          </SplideSlide>
        ))}
      </Carousel>
    </>
  );
};

export default Reviews;
