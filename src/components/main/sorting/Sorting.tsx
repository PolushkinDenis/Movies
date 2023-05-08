import React from "react";
import "./Sorting.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
interface TypeSorting {
  clickToggleSorting: boolean;
  setClickToggleSorting: React.Dispatch<React.SetStateAction<boolean>>;
}
const sortArr = [
  "По количсетсву оценок на кинопоиске",
  "По рейтингу",
  "По дате выхода (сначала свежие)",
  "По алфавиту",
];

function Sorting({ clickToggleSorting, setClickToggleSorting }: TypeSorting) {
  const [activeFilter, setActiveFilter] = React.useState<string>(
    "По количсетсву оценок на кинопоиске"
  );
  function toggleSorting() {
    setClickToggleSorting(!clickToggleSorting);
  }
  function clickItemSorting(item: string) {
    setActiveFilter(item);
  }
  return (
    <section className="pageSection catalogControlPanel__pageSection">
      <div className="catalogControlPanel genre__catalogControlPanel">
        <div
          onClick={toggleSorting}
          className={
            clickToggleSorting
              ? "sorting genre__sorting genre__sorting sorting_active"
              : "sorting genre__sorting genre__sorting"
          }
        >
          <div className="nbl-arrowButton">
            <div className="nbl-icon">
              <BiMenuAltRight></BiMenuAltRight>
            </div>
            <div className="nbl-arrowButton__caption">{activeFilter}</div>
            <div className="nbl-icon nbl-icon__reverse">
              <IoIosArrowDown></IoIosArrowDown>
            </div>
          </div>
          <div className="nbl-dropdown sorting__nbl-dropdown">
            <div className="nbl-dropdown__title">Сортировать</div>
            {sortArr.map((item, index) => {
              return (
                <div
                  onClick={() => clickItemSorting(item)}
                  key={item + "-" + index}
                  className={
                    activeFilter === item
                      ? "nbl-dropdown__item nbl-dropdown__item_selected"
                      : "nbl-dropdown__item"
                  }
                >
                  <div className="nbl-dropdown__itemStripe"></div>
                  <div className="nbl-dropdown__itemText">{item}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sorting;
