import { FC } from 'react';
import { AiOutlineDislike } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';

const Review: FC = () => {
  return (
    <div className="review">
      <div>Jalik</div>
      <p>
        офигенный мульт, сначала когда брат смотрел показался бредовым, а потом и сейчас смотрю с
        удовольствием)))
      </p>
      <div>
        <div>17 января 2013</div>
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
