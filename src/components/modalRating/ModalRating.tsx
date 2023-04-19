import { FC } from 'react';
import Modal from '../UI/modal/Modal';
import { RxCross2 } from 'react-icons/rx';
import './modalRating.scss';

interface IModalRatingProps {
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalRating: FC<IModalRatingProps> = ({ activeModal, setActiveModal }) => {
  return (
    <>
      <Modal active={activeModal} setActive={setActiveModal}>
        <h1 className="modalRating__title">Ваша оценка</h1>
        <p className="modalRating__desc">Оценки улучшают рекомендации</p>
        <ul className="modalRating__rateList">
          <li className="modalRating__rateList-item">1</li>
          <li className="modalRating__rateList-item">2</li>
          <li className="modalRating__rateList-item">3</li>
          <li className="modalRating__rateList-item">4</li>
          <li className="modalRating__rateList-item">5</li>
          <li className="modalRating__rateList-item">6</li>
          <li className="modalRating__rateList-item">7</li>
          <li className="modalRating__rateList-item">8</li>
          <li className="modalRating__rateList-item">9</li>
          <li className="modalRating__rateList-item">10</li>
        </ul>
        <div className="modalRating__labelBlock">
          <div>очень плохо</div>
          <div>отлично</div>
        </div>
      </Modal>
      {activeModal && (
        <div onClick={() => setActiveModal(false)} className="modalRating__closeBtn">
          <RxCross2 />
        </div>
      )}
    </>
  );
};

export default ModalRating;
