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
function FilterDropdownGen() {
  const navigate = useNavigate();
  const location = useLocation();

  const { activeGenres, setActiveGenres, activeCountries, setActiveCountries } =
    useContext(AutoContext);
  const goTransitionsPage = (e: any) => navigate(e);

  function changesActiveGenres(item: any) {
    if (activeGenres.find((i) => i.id === item.id)) {
      const obj = activeGenres.filter((i) => i.id !== item.id);
      setActiveGenres(obj);
    } else {
      setActiveGenres([...activeGenres, item]);
    }
    //

    const urlData: (string | undefined)[] = location.pathname.split("/");
    console.log(urlData);

    let arrActiveGenres: any[] = [];
    let arrActiveCountries: any[] = [];
    activeCountries.forEach((i) => {
      arrActiveCountries.push(i.countryNameEng);
    });
    if (
      location.pathname === "/movies" ||
      location.pathname === "/movies/all"
    ) {
      urlData[2] = item.genreNameEng;
      //   goTransitionsPage(`/movies/${item.genreNameEng}`);
    } else if (location.pathname.includes(item.genreNameEng)) {
      console.log("exr");

      activeGenres.forEach((i) => {
        if (i.id !== item.id) {
          arrActiveGenres.push(i.genreNameEng);
        }
      });
      if (arrActiveGenres.length === 0 && activeCountries.length === 1) {
        console.log("1");
        if (urlData[2] === "filter") {
          urlData[2] = arrActiveCountries[0];
        }
        urlData[3] = undefined;
        urlData[4] = undefined;
      } else if (arrActiveGenres.length === 1 && activeCountries.length === 0) {
        console.log("2");
        urlData[2] = arrActiveGenres.join("");
        urlData[3] = undefined;

        // goTransitionsPage("/movies/" + arrActiveGenres.join(""));
      } else if (arrActiveGenres.length === 0 && activeCountries.length === 0) {
        console.log("3");
        urlData[2] = "all";

        // goTransitionsPage("/movies/all");
      } else if (arrActiveGenres.length === 1 && activeCountries.length === 1) {
        urlData[2] = arrActiveGenres[0];
        urlData[3] = arrActiveCountries[0];
        urlData[4] = undefined;
      } else if (arrActiveGenres.length === 0) {
        urlData[3] = undefined;
      } else {
        console.log("4");
        urlData[3] = arrActiveGenres.join("+");
        // goTransitionsPage("/movies/filter/" + arrActiveGenres.join("+"));
      }
    } else {
      arrActiveGenres = activeGenres.map(function (i) {
        return i.genreNameEng;
      });
      arrActiveGenres.push(item.genreNameEng);
      if (arrActiveGenres.length === 1 && arrActiveCountries.length === 1) {
        urlData[2] = arrActiveGenres[0];
        urlData[3] = arrActiveCountries[0];
      } else {
        urlData[2] = "filter";
        urlData[3] = arrActiveGenres.join("+");
        urlData[4] = arrActiveCountries.join("+");
      }
      //   goTransitionsPage("/movies/filter/" + arrActiveGenres.join("+"));
    }
    // goTransitionsPage(urlData.join("/"));

    goTransitionsPage(
      urlData.reduce((acc: any, cur: any) =>
        typeof cur !== "undefined" ? `${acc}/${cur}` : acc
      )
    );

    console.log(urlData);
    // const urlData1 = urlData.join("/");
    // console.log(urlData1);
  }
  return (
    <div className={"filterDropdown filterDropdown_genres"}>
      <div className="filterDropdown__inner">
        <div className="filterDropdown__content">
          <div className="filterDropdown__carousel">
            {
              <Swiper
                slidesPerView={5}
                slidesPerGroup={2}
                spaceBetween={12}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                  280: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 12,
                  },
                  744: {
                    slidesPerView: 5,
                    slidesPerGroup: 2,
                    spaceBetween: 12,
                  },
                }}
                className="filterDropdown__swiper"
              >
                {genresFilms.genresMovies.map((item, index) => {
                  return (
                    <SwiperSlide key={item.genreNameRu + "-" + index}>
                      <div
                        onClick={() => changesActiveGenres(item)}
                        className={
                          activeGenres.find((i) => i.id === item.id)
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
            }
          </div>
          <div className="filterDropdown__list-container">
            <ul className="filterDropdown__list">
              {genresFilms.genresMovies.map((item, index) => {
                return (
                  <li
                    key={item.genreNameRu + "-" + index}
                    className={
                      activeGenres.find((i) => i.id === item.id)
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
                        value={item.genreNameRu}
                      />
                      <div className="filterDropdown__input-text">
                        {item.genreNameRu}
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

export default FilterDropdownGen;
