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
import { ICountry } from "../../../types/ICountry";
import MaskTr from "../../../images/filter/maskTr.png";
import MaskTs from "../../../images/filter/maskTs.png";
import { Link, useNavigate, redirect } from "react-router-dom";
import { useLocation } from "react-router";

function FilterDropdownCou() {
  const navigate = useNavigate();
  const location = useLocation();
  const goTransitionsPage = (e: string) => navigate(e);
  const { activeGenres, setActiveGenres, activeCountries, setActiveCountries } =
    useContext(AutoContext);

  function changesActiveCountry(item: any) {
    if (activeCountries.find((i) => i.id === item.id)) {
      const obj = activeCountries.filter((i) => i.id !== item.id);
      setActiveCountries(obj);
    } else {
      setActiveCountries([...activeCountries, item]);
    }
    //

    let result: any[] = [];
    if (
      location.pathname === "/movies" ||
      location.pathname === "/movies/all"
    ) {
      goTransitionsPage(`/movies/${item.countryNameEng}`);
    } else if (location.pathname.includes(item.countryNameEng)) {
      activeCountries.forEach((i) => {
        if (i.id !== item.id) {
          result.push(i.countryNameEng);
        }
      });
      if (result.length === 1) {
        goTransitionsPage("/movies/" + result.join(""));
      } else if (result.length === 0) {
        goTransitionsPage("/movies/all");
      } else {
        goTransitionsPage("/movies/filter/" + result.join("+"));
      }
    } else {
      result = activeCountries.map(function (i) {
        return i.countryNameEng;
      });
      result.push(item.countryNameEng);
      goTransitionsPage("/movies/filter/" + result.join("+"));
    }
  }
  return (
    <div className={"filterDropdown filterDropdown_countries"}>
      <div className="filterDropdown__inner">
        <div className="filterDropdown__content">
          <div className="filterDropdown__carousel">
            <div className="filterDropdown__scrollpane">
              <Swiper
                slidesPerView={"auto"}
                slidesPerGroup={1}
                spaceBetween={12}
                navigation={true}
                modules={[Navigation]}
                className="filterDropdown__swiper"
              >
                {genresFilms.countries.map((item, index) => {
                  return (
                    <SwiperSlide key={item.countryNameRu + "-" + index}>
                      <div
                        onClick={() => changesActiveCountry(item)}
                        className={
                          activeCountries.find((i) => i.id === item.id)
                            ? "sausage filterDropdown__sausage checked"
                            : "sausage filterDropdown__sausage"
                        }
                      >
                        <div className="sausage__title">
                          {item.countryNameRu}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="filterDropdown__list-container">
            <ul className="filterDropdown__list">
              {genresFilms.countries.map((item, index) => {
                return (
                  <li
                    key={item.countryNameRu + "-" + index}
                    className={
                      activeCountries.find((i) => i.id === item.id)
                        ? "filterDropdown__item filterDropdown__item_checkbox checked"
                        : "filterDropdown__item filterDropdown__item_checkbox"
                    }
                  >
                    <label
                      onClick={() => changesActiveCountry(item)}
                      className="filterDropdown__label"
                    >
                      <input
                        type="checkbox"
                        className="filterDropdown__input"
                        value={item.countryNameRu}
                      />
                      <div className="filterDropdown__input-text">
                        {item.countryNameRu}
                      </div>
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

export default FilterDropdownCou;
