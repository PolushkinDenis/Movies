import React from "react";
import "./FilterDropdown.scss";
import { BsCheckLg } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, SwiperOptions, FreeMode } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/css/free-mode";

// swiper/css/free-mode

import MaskTr from "../../../images/filter/maskTr.png";
import MaskTs from "../../../images/filter/maskTs.png";

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
interface Breakpoints {
  [width: number]: SwiperOptions;
  [ratio: string]: SwiperOptions;
}
interface TypeFilterDropdown {
  classes: string | null;
  meaningActiv: string[];
  funcActiv: React.Dispatch<React.SetStateAction<string[]>>;
  breakpoints?: Breakpoints;
}

function FilterDropdown({
  classes,
  meaningActiv,
  funcActiv,
  breakpoints,
}: TypeFilterDropdown) {
  function changesActiveGenres(item: string) {
    if (meaningActiv.includes(item)) {
      const obj = meaningActiv.filter((i: string) => i !== item);
      funcActiv(obj);
    } else {
      funcActiv([...meaningActiv, item]);
    }
  }
  return (
    <div className={"filterDropdown filterDropdown_" + classes}>
      <div className="filterDropdown__inner">
        <div className="filterDropdown__content">
          <div className="filterDropdown__carousel">
            {classes === "genres" ? (
              <Swiper
                slidesPerView={5}
                slidesPerGroup={2}
                spaceBetween={12}
                navigation={true}
                modules={[Navigation]}
                breakpoints={breakpoints}
                className="filterDropdown__swiper"
              >
                {janr.map((item, index) => {
                  return (
                    <SwiperSlide key={item + "-" + index}>
                      <div
                        onClick={() => changesActiveGenres(item)}
                        className={
                          meaningActiv.includes(item)
                            ? "filterDropdown__carousel-item checked"
                            : "filterDropdown__carousel-item"
                        }
                      >
                        <div className="filterDropdown__nbl-tile">
                          <div className="nbl-icon">
                            <img src={MaskTs} alt="" />
                          </div>
                          <div className="nbl-tile__caption">{item}</div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            ) : (
              <div className="filterDropdown__scrollpane">
                <Swiper
                  slidesPerView={"auto"}
                  slidesPerGroup={1}
                  spaceBetween={12}
                  navigation={true}
                  modules={[Navigation]}
                  className="filterDropdown__swiper"
                >
                  {janr.map((item, index) => {
                    return (
                      <SwiperSlide key={item + "-" + index}>
                        <div
                          onClick={() => changesActiveGenres(item)}
                          className={
                            meaningActiv.includes(item)
                              ? "sausage filterDropdown__sausage checked"
                              : "sausage filterDropdown__sausage"
                          }
                        >
                          <div className="sausage__title">{item}</div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            )}
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
                      onClick={() => changesActiveGenres(item)}
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
