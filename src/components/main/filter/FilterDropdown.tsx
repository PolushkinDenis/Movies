import React from "react";
import "./FilterDropdown.scss";
import { BsCheckLg } from "react-icons/bs";

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
function FilterDropdown({ classes, meaningActiv, funcActiv }: any) {
  function changesActiveGenres(e: any) {
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
