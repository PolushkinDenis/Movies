import React, { FC } from "react";
import { Splide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
import './css/splide.min.css'
import './css/splide-core.min.css'
import './css/themes/splide-default.min.css'
import "./Carousel.scss";

interface IProps {
  perPage: number;
  perMove: number;
  children: React.ReactNode;
}

const Carousel: FC<IProps> = ({ perPage, perMove, children }) => {
  return (
    <Splide
      options={{
        rewind: false,
        perPage: perPage,
        gap: "20px",
        perMove: perMove,
        pagination: false,
        // padding: { left: 25, right: 25 },
        mediaQuery: "max",
        breakpoints: {
          1270: {
            perPage: 6,
          },
          1124: {
            perPage: 5,
          },
          786: {
            perPage: 4,
          },
          576: {
            perPage: 3,
          },
          500: {
            perPage: 2,
          },
        },
        updateOnMove: true,
      }}
      aria-label="Carousel"
    >
      {children}
    </Splide>
  );
};

export default Carousel;
