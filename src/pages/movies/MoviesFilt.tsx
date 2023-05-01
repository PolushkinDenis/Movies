import React, { useContext } from "react";
import FiltersDesktop from "../../components/main/filter/FiltersDesktop";
import HeaderBar from "../../components/main/headerBar/HeaderBar";
import Sorting from "../../components/main/sorting/Sorting";
import SlimPoster from "../../components/slimPoster/SlimPoster";
import { useTranslation } from "react-i18next";
import { AutoContext } from "../../context";

function MoviesFilt() {
  return (
    <section className="pageSection genre__pageSection ">
      <div className="genre__gallery gallery ">
        <ul className="gallery__list">
          <SlimPoster></SlimPoster>
          <SlimPoster></SlimPoster>
          <SlimPoster></SlimPoster>
          <SlimPoster></SlimPoster>
          <SlimPoster></SlimPoster>
          <SlimPoster></SlimPoster>
          <SlimPoster></SlimPoster>
          <SlimPoster></SlimPoster>
          <SlimPoster></SlimPoster>
          <SlimPoster></SlimPoster>
          <SlimPoster></SlimPoster>
          <SlimPoster></SlimPoster>
          <SlimPoster></SlimPoster>
          <SlimPoster></SlimPoster>
          <div className="genre__moreButton">
            <button className="nbl-button nbl-button_style_ran">
              <div className="nbl-button__primaryText">Показать еще</div>
            </button>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default MoviesFilt;
