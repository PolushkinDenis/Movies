import React, { useContext } from "react";
import "./FilterDropdown.scss";
import { BsCheckLg } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, SwiperOptions, FreeMode } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/css/free-mode";
import genresFilms from "../../../data/genresFilms";
import { AutoContext } from "../../../context";
import { IGenresMovies } from "../../../types/IGenresMovies";
import MaskTr from "../../../images/filter/maskTr.png";
import MaskTs from "../../../images/filter/maskTs.png";
import { Link, useNavigate, redirect } from "react-router-dom";
import { useLocation } from "react-router";

interface Breakpoints {
  [width: number]: SwiperOptions;
  [ratio: string]: SwiperOptions;
}
interface TypeFilterDropdown {
  classes: string | null;
  meaningActiv: IGenresMovies[];
  funcActiv: React.Dispatch<React.SetStateAction<IGenresMovies[]>>;
  breakpoints?: Breakpoints;
}

function FilterDropdown({
  classes,
  meaningActiv,
  funcActiv,
  breakpoints,
}: TypeFilterDropdown) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  const { activeGenres, setActiveGenres, activeCountries, setActiveCountries } =
    useContext(AutoContext);

  function changesActiveGenres(item: IGenresMovies) {
    if (meaningActiv.find((i) => i.id === item.id)) {
      const obj = meaningActiv.filter((i) => i.id !== item.id);
      funcActiv(obj);
    } else {
      funcActiv([...meaningActiv, item]);
    }

    // meaningActiv.find((item, index, array)=> {
    //   // если true - возвращается текущий элемент и перебор прерывается
    //   // если все итерации оказались ложными, возвращается undefined
    // });
    // meaningActiv

    // if (meaningActiv.includes(item)) {
    //   const obj = meaningActiv.filter((i: string) => i !== item);
    //   funcActiv(obj);
    // } else {
    //   funcActiv([...meaningActiv, item]);
    // }
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
                {genresFilms.genresMovies.map((item, index) => {
                  return (
                    <SwiperSlide key={item.genreNameRu + "-" + index}>
                      <div
                        onClick={() => changesActiveGenres(item)}
                        className={
                          meaningActiv.find((i) => i.id === item.id)
                            ? "filterDropdown__carousel-item checked"
                            : "filterDropdown__carousel-item"
                        }
                      >
                        <div className="filterDropdown__nbl-tile">
                          <div className="nbl-icon">
                            <img src={MaskTs} alt="" />
                          </div>
                          <div className="nbl-tile__caption">
                            {item.genreNameRu}
                          </div>
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
                  {genresFilms.genresMovies.map((item, index) => {
                    return (
                      <SwiperSlide key={item + "-" + index}>
                        <div
                          onClick={() => changesActiveGenres(item)}
                          className={
                            meaningActiv.find((i) => i.id === item.id)
                              ? "sausage filterDropdown__sausage checked"
                              : "sausage filterDropdown__sausage"
                          }
                        >
                          <div className="sausage__title">
                            {item.genreNameRu}
                          </div>
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
              {genresFilms.genresMovies.map((item, index) => {
                return (
                  <li
                    key={item.genreNameRu + "-" + index}
                    className={
                      meaningActiv.find((i) => i.id === item.id)
                        ? "filterDropdown__item filterDropdown__item_checkbox checked"
                        : "filterDropdown__item filterDropdown__item_checkbox"
                    }
                  >
                    {/* {activeCountries.reduce((accumulator, item) => {
                        if (accumulator.length === 0) {
                          return item.genreNameRu;
                        } else {
                          return accumulator + "," + item.genreNameRu;
                        }
                      }, "")} */}
                    <label
                      onClick={() => changesActiveGenres(item)}
                      className="filterDropdown__label"
                    >
                      <Link
                        to={`${
                          location.pathname === "/movies"
                            ? `/movies/${item.genreNameEng}`
                            : `/movies${
                                activeGenres.length === 0
                                  ? "/all"
                                  : "/filter/" +
                                    activeGenres.reduce((accumulator, item) => {
                                      if (accumulator.length === 0) {
                                        return item.genreNameEng;
                                      } else {
                                        return (
                                          accumulator + "+" + item.genreNameEng
                                        );
                                      }
                                    }, "")

                                // +
                                // "+" +
                                // item.genreNameEng
                              }
                        `
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="filterDropdown__input"
                          value={item.genreNameRu}
                        />
                        <div className="filterDropdown__input-text">
                          {item.genreNameRu}
                        </div>
                        <div className="filterDropdown__checkbox">
                          <BsCheckLg></BsCheckLg>
                        </div>
                      </Link>
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