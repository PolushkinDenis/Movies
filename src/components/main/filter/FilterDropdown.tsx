import React from "react";
import "./FilterDropdown.scss";
import { BsCheckLg } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, SwiperOptions } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";

import { ReactComponent as MaskTr } from "../../../images/filter/maskTr.svg";
const janr = [
  "аниме",
  "биографический",
  "боевик",
  "вестерн",
  "военный",
  "детектив",
  "детский",
  "документальный",
  "драма",
  "исторический",
  "кинокомикс",
  "комедия",
  "концерт",
  "короткометражный",
  "криминал",
  "мелодрама",
  "мистика",
  "музыка",
  "мультфильм",
  "мюзикл",
  "научный",
  "нуар",
  "приключения",
  "реалити-шоу",
  "семейный",
  "спорт",
  "триллер",
  "ужасы",
  "фантастика",
  "фэнтези",
];
const janrIm = [];
function FilterDropdown({ classes, meaningActiv, funcActiv }: any) {
  function changesActiveGenres(e: any) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    if (meaningActiv.includes(e.target.value)) {
      const obj = meaningActiv.filter((item: any) => item !== e.target.value);
      funcActiv(obj);
    } else {
      funcActiv([...meaningActiv, e.target.getAttribute("value")]);
    }
  }
  return (
    <div className={"filterDropdown filterDropdown_" + classes}>
      <div className="filterDropdown__inner">
        <div className="filterDropdown__content">
          <div className="filterDropdown__carousel">
            <Swiper
              slidesPerView={5}
              slidesPerGroup={2}
              spaceBetween={12}
              navigation={true}
              modules={[Navigation]}
              className="filterDropdown__swiper"
            >
              <SwiperSlide>
                <div className="filterDropdown__carousel-item">
                  <div className="filterDropdown__nbl-tile">
                    <div className="nbl-icon">
                      <MaskTr />
                    </div>
                    <div className="nbl-tile__caption">Драмы</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="filterDropdown__carousel-item">
                  <div className="filterDropdown__nbl-tile">
                    <div className="nbl-icon">
                      <MaskTr />
                    </div>
                    <div className="nbl-tile__caption">Драмы</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="filterDropdown__carousel-item">
                  <div className="filterDropdown__nbl-tile">
                    <div className="nbl-icon">
                      <MaskTr />
                    </div>
                    <div className="nbl-tile__caption">Драмы</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="filterDropdown__carousel-item">
                  <div className="filterDropdown__nbl-tile">
                    <div className="nbl-icon">
                      <MaskTr />
                    </div>
                    <div className="nbl-tile__caption">Драмы</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="filterDropdown__carousel-item">
                  <div className="filterDropdown__nbl-tile">
                    <div className="nbl-icon">
                      <MaskTr />
                    </div>
                    <div className="nbl-tile__caption">Драмы</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="filterDropdown__carousel-item">
                  <div className="filterDropdown__nbl-tile">
                    <div className="nbl-icon">
                      <MaskTr />
                    </div>
                    <div className="nbl-tile__caption">Драмы</div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="filterDropdown__list-container">
            <ul className="filterDropdown__list">
              {janr.map((item, index) => {
                return (
                  <li
                    key={item + "-" + index}
                    className={
                      meaningActiv.includes(item)
                        ? "filterDropdown__item filterDropdown__item_checkbox checked"
                        : "filterDropdown__item filterDropdown__item_checkbox"
                    }
                  >
                    <label
                      onClick={changesActiveGenres}
                      className="filterDropdown__label"
                    >
                      <input
                        type="checkbox"
                        className="filterDropdown__input"
                        value={item}
                      />
                      <div className="filterDropdown__input-text">{item}</div>
                      <div className="filterDropdown__checkbox">
                        <BsCheckLg></BsCheckLg>
                      </div>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterDropdown;
