import React, {useContext, useEffect} from "react";
import "./Sorting.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { AutoContext } from "../../../context";

interface TypeSorting {
  clickToggleSorting: boolean;
  setClickToggleSorting: React.Dispatch<React.SetStateAction<boolean>>;
}
interface SortArrType {
  title: string,
  value: string
}
const sortArr = [
  {title: "По количсетсву оценок на кинопоиске", value: "ratingKinopoiskVoteCount"},
  {title: "По рейтингу", value: "ratingKinopoisk"},
  {title: "По дате выхода (сначала свежие)", value: "year"},
  {title: "По алфавиту", value: "nameRu"},
];

function Sorting({ clickToggleSorting, setClickToggleSorting }: TypeSorting) {
  const [activeFilter, setActiveFilter] = React.useState<string>(
    "По количсетсву оценок на кинопоиске"
  );
  const {
    activeSorting,
    setActiveSorting,
  } = useContext(AutoContext);

  function toggleSorting() {
    setClickToggleSorting(!clickToggleSorting);
  }
  function clickItemSorting(item: SortArrType) {
    setActiveFilter(item.title);
    setActiveSorting(item.value)
  }
  useEffect(() => {
    if(activeSorting === "") {
      clickItemSorting({title: "По количсетсву оценок на кинопоиске", value: "ratingKinopoiskVoteCount"})
    }
    else {
      const item = {
        title: sortArr.filter(arr => arr.value === activeSorting)[0].title,
        value: activeSorting 
      }
      clickItemSorting(item)
    }
  }, [])
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
                    activeFilter === item.title
                      ? "nbl-dropdown__item nbl-dropdown__item_selected"
                      : "nbl-dropdown__item"
                  }
                >
                  <div className="nbl-dropdown__itemStripe"></div>
                  <div className="nbl-dropdown__itemText">{item.title}</div>
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
