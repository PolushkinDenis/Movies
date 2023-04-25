import { FC } from 'react';

const ViewOnDevices: FC = () => {
  return (
    <div className="viewOnDevices">
      <div className="viewOnDevices__container">
        <div className="viewOnDevices__container-title">
          Cмотреть «Смешарики» на всех устройствах
        </div>
        <p className="viewOnDevices__container-desc">
          Приложение доступно для скачивания на iOS, Android, SmartTV и приставках
        </p>
        <button className="viewOnDevices__container-btn">Подключить устройства</button>
      </div>
      <div className="viewOnDevices__images">
        <img
          className="viewOnDevices__images-screen1"
          src="https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png"
          alt="Устройства для просмотра Иви"
        />
        <img
          className="viewOnDevices__images-screen2"
          src="https://www.ivi.ru/images/_ds/watchAllDevices/ipad-without-poster.png"
          alt="Устройства для просмотра Иви"
        />
        <img
          className="viewOnDevices__images-photo1"
          src="https://www.ivi.ru/images/_ds/watchAllDevices/ipad-without-poster.png"
          alt="Постер Смешарики"
        />
        <img
          className="viewOnDevices__images-photo2"
          src="https://thumbs.dfs.ivi.ru/storage33/contents/6/9/f515d3f4c5c5a77b8f512a284b7ec2.jpg/400x226/"
          alt="Постер Смешарики"
        />
      </div>
    </div>
  );
};

export default ViewOnDevices;
