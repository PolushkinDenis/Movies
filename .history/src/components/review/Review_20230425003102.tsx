import { FC } from 'react';
import { AiOutlineDislike } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';

const Review: FC = () => {
  return (
    <div className="review">
      <div></div>
      <p></p>
      <div>
        <div></div>
        <div>
          <AiOutlineLike />
          <span>37</span>
          <AiOutlineDislike />
        </div>
      </div>
    </div>
  );
};

export default Review;
