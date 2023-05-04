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
  const goTransitionsPage = (e: any) => navigate(e);
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

    let arrActiveCountries: any[] = [];
    let arrActiveGenres: any[] = [];
    activeGenres.forEach((i) => {
      arrActiveGenres.push(i.genreNameEng);
    });
    const urlData: (string | undefined)[] = location.pathname.split("/");
    console.log(urlData);
    let number = 4;
    if (activeGenres.length === 0) {
      number = 3;
    }

    if (
      location.pathname === "/movies" ||
      location.pathname === "/movies/all"
    ) {
      urlData[2] = item.countryNameEng;
      console.log("start");

      //   goTransitionsPage(`/movies/${item.countryNameEng}`);
    } else if (location.pathname.includes(item.countryNameEng)) {
      console.log("close");
      activeCountries.forEach((i) => {
        if (i.id !== item.id) {
          arrActiveCountries.push(i.countryNameEng);
        }
      });

      if (arrActiveGenres.length === 1 && arrActiveCountries.length === 0) {
        console.log("1");
        if (urlData[2] === "filter") {
          urlData[2] = arrActiveGenres[0];
        }
        urlData[3] = undefined;
        urlData[4] = undefined;
      } else if (activeGenres.length === 0 && arrActiveCountries.length === 1) {
        console.log(2);
        urlData[2] = arrActiveCountries[0];
        urlData[number] = undefined;
        // goTransitionsPage("/movies/" + arrActiveCountries.join(""));
      } else if (activeGenres.length === 0 && arrActiveCountries.length === 0) {
        console.log(3);
        urlData[2] = "all";
        urlData[3] = undefined;
        urlData[4] = undefined;
        // goTransitionsPage("/movies/all");
      } else if (activeGenres.length === 1 && arrActiveCountries.length === 1) {
        urlData[2] = arrActiveGenres[0];
        urlData[3] = arrActiveCountries[0];
        urlData[4] = undefined;
      } else {
        console.log(5);
        urlData[number] = arrActiveCountries.join("+");
        // goTransitionsPage("/movies/filter/" + arrActiveCountries.join("+"));
      }
    } else {
      console.log("add");
      arrActiveCountries = activeCountries.map(function (i) {
        return i.countryNameEng;
      });
      arrActiveCountries.push(item.countryNameEng);

      if (arrActiveGenres.length === 1 && arrActiveCountries.length === 1) {
        console.log("add 1");
        urlData[2] = arrActiveGenres[0];
        urlData[3] = arrActiveCountries[0];
      } else {
        console.log("add 2");
        urlData[2] = "filter";
        urlData[3] = arrActiveGenres.join("+");
        urlData[number] = arrActiveCountries.join("+");
      }
      //   goTransitionsPage("/movies/filter/" + arrActiveCountries.join("+"));
    }

    console.log(urlData);
    // const urlData1 = urlData.reduce((acc: any, cur: any) =>
    //   typeof cur !== "undefined" ? `${acc}/${cur}` : acc
    // );
    goTransitionsPage(
      urlData.reduce((acc: any, cur: any) =>
        typeof cur !== "undefined" ? `${acc}/${cur}` : acc
      )
    );
    console.log(urlData);
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
