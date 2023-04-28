import { FC } from 'react';
import { AiOutlineDislike } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';

const Review: FC = () => {
  return (
    <div className="review">
      <div className="review__name">Jalik</div>
      <p className="review__text">sdsd</p>
      <div className="review__container">
        <div className="review__container-date">17 января 2013</div>
        <div className="review__container-assesment">
          <AiOutlineLike />
          <span>37</span>
          <AiOutlineDislike />
        </div>
      </div>
    </div>
  );
};

export default Review;