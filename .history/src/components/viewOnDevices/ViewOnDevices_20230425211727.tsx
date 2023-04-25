import { FC } from 'react';

const ViewOnDevices: FC = () => {
  return (
    <div>
      <div>
        <div>Cмотреть «Смешарики» на всех устройствах</div>
        <p>Приложение доступно для скачивания на iOS, Android, SmartTV и приставках</p>
        <button>Подключить устройства</button>
      </div>
      <div>
        <img
          src="https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png"
          alt="Устройства для просмотра Иви"
        />
        <img
          src="https://www.ivi.ru/images/_ds/watchAllDevices/ipad-without-poster.png"
          alt="Устройства для просмотра Иви"
        />
        <img
          src="https://www.ivi.ru/images/_ds/watchAllDevices/ipad-without-poster.png"
          alt="Постер Смешарики"
        />
        <img
          src="https://thumbs.dfs.ivi.ru/storage33/contents/6/9/f515d3f4c5c5a77b8f512a284b7ec2.jpg/400x226/"
          alt="Постер Смешарики"
        />
      </div>
    </div>
  );
};

export default ViewOnDevices;
