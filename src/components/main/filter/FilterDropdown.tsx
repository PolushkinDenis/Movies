// import React, { useContext } from "react";
// import "./FilterDropdown.scss";
// import { BsCheckLg } from "react-icons/bs";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, SwiperOptions, FreeMode } from "swiper";
// import "swiper/css";
// import "swiper/scss/navigation";
// import "swiper/css/free-mode";
// import genresFilms from "../../../data/genresFilms";
// import { AutoContext } from "../../../context";
// import { IGenresMovies } from "../../../types/IGenresMovies";
// import { ICountry } from "../../../types/ICountry";
// import MaskTr from "../../../images/filter/maskTr.png";
// import MaskTs from "../../../images/filter/maskTs.png";
// import { Link, useNavigate, redirect } from "react-router-dom";
// import { useLocation } from "react-router";

// interface Breakpoints {
//   [width: number]: SwiperOptions;
//   [ratio: string]: SwiperOptions;
// }
// interface TypeFilterDropdown {
//   classes: string | null;
//   meaningActiv: IGenresMovies[] | ICountry[];
//   funcActiv: React.Dispatch<React.SetStateAction<IGenresMovies[] | ICountry[]>>;
//   breakpoints?: Breakpoints;
// }

// function FilterDropdown({
//   classes,
//   meaningActiv,
//   funcActiv,
//   breakpoints,
// }: TypeFilterDropdown) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { activeGenres, setActiveGenres, activeCountries, setActiveCountries } =
//     useContext(AutoContext);
//   const goTransitionsPage = (e: string) => navigate(e);
//   function changesActiveGenres(item) {
//     if (meaningActiv.find((i) => i.id === item.id)) {
//       const obj = meaningActiv.filter((i) => i.id !== item.id);
//       funcActiv(obj);
//     } else {
//       funcActiv([...meaningActiv, item]);
//     }
//     //

//     let result: any[] = [];
//     if (
//       location.pathname === "/movies" ||
//       location.pathname === "/movies/all"
//     ) {
//       goTransitionsPage(`/movies/${item.genreNameEng}`);
//     } else if (location.pathname.includes(item.genreNameEng)) {
//       meaningActiv.forEach((i) => {
//         if (i.id !== item.id) {
//           result.push(i.genreNameEng);
//         }
//       });
//       if (result.length === 1) {
//         goTransitionsPage("/movies/" + result.join(""));
//       } else if (result.length === 0) {
//         goTransitionsPage("/movies/all");
//       } else {
//         goTransitionsPage("/movies/filter/" + result.join("+"));
//       }
//     } else {
//       result = meaningActiv.map(function (i) {
//         return i.genreNameEng;
//       });
//       result.push(item.genreNameEng);
//       goTransitionsPage("/movies/filter/" + result.join("+"));
//     }
//   }
//   /////////////////////
//   function changesActiveCountry(item) {
//     if (meaningActiv.find((i) => i.id === item.id)) {
//       const obj = meaningActiv.filter((i) => i.id !== item.id);
//       funcActiv(obj);
//     } else {
//       funcActiv([...meaningActiv, item]);
//     }
//     //

//     let result: any[] = [];
//     if (
//       location.pathname === "/movies" ||
//       location.pathname === "/movies/all"
//     ) {
//       goTransitionsPage(`/movies/${item.countryNameEng}`);
//     } else if (location.pathname.includes(item.countryNameEng)) {
//       meaningActiv.forEach((i) => {
//         if (i.id !== item.id) {
//           result.push(i.countryNameEng);
//         }
//       });
//       if (result.length === 1) {
//         goTransitionsPage("/movies/" + result.join(""));
//       } else if (result.length === 0) {
//         goTransitionsPage("/movies/all");
//       } else {
//         goTransitionsPage("/movies/filter/" + result.join("+"));
//       }
//     } else {
//       result = meaningActiv.map(function (i) {
//         return i.countryNameEng;
//       });
//       result.push(item.countryNameEng);
//       goTransitionsPage("/movies/filter/" + result.join("+"));
//     }
//   }

//   return (
//     <div className={"filterDropdown filterDropdown_" + classes}>
//       <div className="filterDropdown__inner">
//         <div className="filterDropdown__content">
//           <div className="filterDropdown__carousel">
//             {classes === "genres" ? (
//               <Swiper
//                 slidesPerView={5}
//                 slidesPerGroup={2}
//                 spaceBetween={12}
//                 navigation={true}
//                 modules={[Navigation]}
//                 breakpoints={breakpoints}
//                 className="filterDropdown__swiper"
//               >
//                 {genresFilms.genresMovies.map((item, index) => {
//                   return (
//                     <SwiperSlide key={item.genreNameRu + "-" + index}>
//                       <div
//                         onClick={() => changesActiveGenres(item)}
//                         className={
//                           meaningActiv.find((i) => i.id === item.id)
//                             ? "filterDropdown__carousel-item checked"
//                             : "filterDropdown__carousel-item"
//                         }
//                       >
//                         <div className="filterDropdown__nbl-tile">
//                           <div className="nbl-icon">
//                             <img src={MaskTs} alt="" />
//                           </div>
//                           <div className="nbl-tile__caption">
//                             {item.genreNameRu}
//                           </div>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   );
//                 })}
//               </Swiper>
//             ) : (
//               <div className="filterDropdown__scrollpane">
//                 <Swiper
//                   slidesPerView={"auto"}
//                   slidesPerGroup={1}
//                   spaceBetween={12}
//                   navigation={true}
//                   modules={[Navigation]}
//                   className="filterDropdown__swiper"
//                 >
//                   {genresFilms.countries.map((item, index) => {
//                     return (
//                       <SwiperSlide key={item.countryNameRu + "-" + index}>
//                         <div
//                           onClick={() => changesActiveCountry(item)}
//                           className={
//                             meaningActiv.find((i) => i.id === item.id)
//                               ? "sausage filterDropdown__sausage checked"
//                               : "sausage filterDropdown__sausage"
//                           }
//                         >
//                           <div className="sausage__title">
//                             {item.countryNameRu}
//                           </div>
//                         </div>
//                       </SwiperSlide>
//                     );
//                   })}
//                 </Swiper>
//               </div>
//             )}
//           </div>
//           <div className="filterDropdown__list-container">
//             <ul className="filterDropdown__list">
//               {classes === "genres"
//                 ? genresFilms.genresMovies.map((item, index) => {
//                     return (
//                       <li
//                         key={item.genreNameRu + "-" + index}
//                         className={
//                           meaningActiv.find((i) => i.id === item.id)
//                             ? "filterDropdown__item filterDropdown__item_checkbox checked"
//                             : "filterDropdown__item filterDropdown__item_checkbox"
//                         }
//                       >
//                         <label
//                           onClick={() => changesActiveGenres(item)}
//                           className="filterDropdown__label"
//                         >
//                           <input
//                             type="checkbox"
//                             className="filterDropdown__input"
//                             value={item.genreNameRu}
//                           />
//                           <div className="filterDropdown__input-text">
//                             {item.genreNameRu}
//                           </div>
//                           <div className="filterDropdown__checkbox">
//                             <BsCheckLg></BsCheckLg>
//                           </div>
//                         </label>
//                       </li>
//                     );
//                   })
//                 : genresFilms.countries.map((item, index) => {
//                     return (
//                       <li
//                         key={item.countryNameRu + "-" + index}
//                         className={
//                           meaningActiv.find((i) => i.id === item.id)
//                             ? "filterDropdown__item filterDropdown__item_checkbox checked"
//                             : "filterDropdown__item filterDropdown__item_checkbox"
//                         }
//                       >
//                         <label
//                           onClick={() => changesActiveCountry(item)}
//                           className="filterDropdown__label"
//                         >
//                           <input
//                             type="checkbox"
//                             className="filterDropdown__input"
//                             value={item.countryNameRu}
//                           />
//                           <div className="filterDropdown__input-text">
//                             {item.countryNameRu}
//                           </div>
//                           <div className="filterDropdown__checkbox">
//                             <BsCheckLg></BsCheckLg>
//                           </div>
//                         </label>
//                       </li>
//                     );
//                   })}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FilterDropdown;

import React from "react";

function FilterDropdown() {
  return <div></div>;
}

export default FilterDropdown;
