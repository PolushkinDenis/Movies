import React, { FC } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MyButton from "../UI/Button/MyButton";
import TabBar from "../UI/Button/TabBar";
import HeaderDropdownBody from "./HeaderDropdownBody";
import HeaderTopMenu from "./HeaderTopMenu";

const Header: FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  const [clickToggleBurger, setClickToggleBurger] = React.useState(false);
  function clickBurger() {
    setClickToggleBurger(!clickToggleBurger);
  }
  const [onMouseOverTogle, setOnMouseOverTogle] = React.useState(false);
  //['bell','movies']
  const [typeMouseOver, setTypeMouseOver] = React.useState("bell");
  const [focusBoxRight, setFocusBoxRight] = React.useState(0);

  function handleOutsideClick(e: any) {
    if (
      e.target.closest(".headerMenu__listItem_expanding") ||
      e.target.closest(".headerDropdown__content") ||
      e.target.closest(".headerTop__notify")
    ) {
      setOnMouseOverTogle(true);
    } else {
      setOnMouseOverTogle(false);
    }
    if (e.target.closest(".headerTop__notify")) {
      setTypeMouseOver("bell");
    } else if (e.target.closest(".headerMenu__listItem_expanding")) {
      setTypeMouseOver("movies");
    }
  }

  React.useEffect(() => {
    document.body.addEventListener("mouseover", handleOutsideClick);
  }, []);

  return (
    <div>
      <header className="header">
        <div className="header__container _container">
          <div className="headerTop">
            <div className="headerTop__content">
              <div className="headerTop__logo">
                <img
                  src="https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg"
                  alt="ivi"
                ></img>
              </div>
              {width > 1160 ? <HeaderTopMenu></HeaderTopMenu> : ""}

              <div className="headerTop__wideArea">
                <div className="headerTop__additionalButton">
                  <Link
                    to={
                      "https://www.ivi.ru/subscribe?from=top_menu&redirect_url=%2Fmovies%2Fsport"
                    }
                  >
                    <MyButton classes="nbl-button__subscription">
                      Смотреть 30 дней за 1 ₽
                    </MyButton>
                  </Link>
                </div>
                <div className="headerTop__headerSearch">
                  <MyButton classes="nbl-button__primaryText nbl-button__icon">
                    <div className="nbl-icon">
                      <svg
                        width="16px"
                        height="16px"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
                        />
                      </svg>
                    </div>
                    Поиск
                  </MyButton>
                </div>
              </div>
              <div className="headerTop__notify">
                <MyButton classes="nbl-button__icon-increase">
                  <svg
                    fill="#000000"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    // width="16px"
                    // height="16px"
                    viewBox="0 0 30.25 30.25"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M29.967,24.208l-4.742-6.582v-7.506c0-5.568-4.53-10.099-10.1-10.099c-5.569,0-10.1,4.53-10.1,10.099v7.506l-4.742,6.582
		c-0.329,0.457-0.375,1.061-0.118,1.562c0.256,0.501,0.772,0.815,1.335,0.815h10.008c0,0.012-0.003,0.019-0.003,0.027
		c0,1.999,1.622,3.618,3.62,3.618s3.619-1.619,3.619-3.618c0-0.011-0.003-0.02-0.003-0.027H28.75c0.562,0,1.079-0.314,1.335-0.815
		C30.342,25.267,30.296,24.665,29.967,24.208z M4.43,23.584l3.313-4.599c0.184-0.255,0.283-0.562,0.283-0.877v-7.991
		c0-3.914,3.185-7.099,7.1-7.099s7.1,3.185,7.1,7.099v7.991c0,0.313,0.101,0.622,0.283,0.877l3.312,4.599H4.43z"
                    />
                  </svg>
                </MyButton>
              </div>
              <div className="headerTop__avatar">
                <Link to={"/"}>
                  <MyButton classes="nbl-button__onlyIcon">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 32 32"
                      data-name="Layer 1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22.82,20.55l-.63-.18c-1.06-.29-1.79-.51-1.91-1.75,2.83-3,2.79-5.67,2.73-8.47,0-.38,0-.76,0-1.15a7.1,7.1,0,0,0-7-7A7.1,7.1,0,0,0,9,9c0,.39,0,.77,0,1.15-.06,2.8-.1,5.45,2.73,8.47-.12,1.24-.85,1.46-1.91,1.75l-.63.18C5.61,21.74,2,25,2,29a1,1,0,0,0,2,0c0-3,3-5.61,5.82-6.55.16-.06.34-.1.52-.15A4.11,4.11,0,0,0,13.45,20a5.4,5.4,0,0,0,5.1,0,4.11,4.11,0,0,0,3.11,2.35c.18.05.36.09.52.15C25,23.39,28,26,28,29a1,1,0,0,0,2,0C30,25,26.39,21.74,22.82,20.55Zm-9.36-3C10.9,15,10.94,12.86,11,10.18,11,9.8,11,9.4,11,9A5,5,0,0,1,21,9c0,.4,0,.8,0,1.18,0,2.68.09,4.8-2.47,7.36A3.58,3.58,0,0,1,13.46,17.54Z" />
                    </svg>
                  </MyButton>
                </Link>
              </div>
            </div>
            {
              <HeaderDropdownBody
                clasee={onMouseOverTogle ? "focusAnim" : "notFocusAnim"}
                type={typeMouseOver}
              ></HeaderDropdownBody>
            }
          </div>
        </div>
        {width > 1160 ? (
          ""
        ) : (
          <div className="tabBarPlate">
            <div className="nbl-tabBar">
              <TabBar
                toLink="https://www.ivi.ru/"
                classes="nbl-tabBar__item nbl-tabBar__item-active"
              >
                <div className="nbl-tabBar__itemGlowImage"></div>
                <div className="nbl-tabBar__itemIcon">
                  <div className="nbl-tabBar__icon">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Vector"
                        d="M2 20.0001H4M4 20.0001H10M4 20.0001V11.4522C4 10.9179 4 10.6506 4.06497 10.4019C4.12255 10.1816 4.21779 9.97307 4.3457 9.78464C4.49004 9.57201 4.69064 9.39569 5.09277 9.04383L9.89436 4.84244C10.6398 4.19014 11.0126 3.86397 11.4324 3.73982C11.8026 3.63035 12.1972 3.63035 12.5674 3.73982C12.9875 3.86406 13.3608 4.19054 14.1074 4.84383L18.9074 9.04383C19.3095 9.39568 19.5102 9.57202 19.6546 9.78464C19.7825 9.97307 19.877 10.1816 19.9346 10.4019C19.9995 10.6506 20 10.9179 20 11.4522V20.0001M10 20.0001H14M10 20.0001V16.0001C10 14.8955 10.8954 14.0001 12 14.0001C13.1046 14.0001 14 14.8955 14 16.0001V20.0001M14 20.0001H20M20 20.0001H22"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="nbl-tabBar__itemCaption">Мой Иви</div>
              </TabBar>
              <TabBar
                toLink="https://www.ivi.ru/movies"
                classes="nbl-tabBar__item"
              >
                <div className="nbl-tabBar__itemGlowImage"></div>
                <div className="nbl-tabBar__itemIcon">
                  <div className="nbl-tabBar__icon">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2,18.8V5.3A2.3,2.3,0,0,1,4.3,3H9.6a1.1,1.1,0,0,1,.8.4l2.8,3.2a1.1,1.1,0,0,0,.8.4h5.6A2.2,2.2,0,0,1,22,9.2v9.7A2.2,2.2,0,0,1,19.8,21H4.2A2.2,2.2,0,0,1,2,18.8Z"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="nbl-tabBar__itemCaption">Каталог</div>{" "}
              </TabBar>
              <MyButton classes="nbl-tabBar__item">
                <div className="nbl-tabBar__itemGlowImage"></div>
                <div className="nbl-tabBar__itemIcon">
                  <div className="nbl-tabBar__icon">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="nbl-tabBar__itemCaption">Поиск</div>
              </MyButton>
              <TabBar
                toLink="https://www.ivi.ru/tvplus"
                classes="nbl-tabBar__item"
              >
                <div className="nbl-tabBar__itemGlowImage"></div>
                <div className="nbl-tabBar__itemIcon">
                  <div className="nbl-tabBar__icon">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.0254 8.40554C20.7987 8.20998 20.5218 8.09678 20.3141 8.02584C20.0833 7.94703 19.8184 7.88184 19.5383 7.82624C18.9764 7.71473 18.2727 7.62624 17.4908 7.55704C15.9221 7.41822 13.955 7.34998 12 7.34998C10.045 7.34997 8.0779 7.41821 6.50923 7.55704C5.7273 7.62623 5.02357 7.71473 4.46174 7.82624C4.18161 7.88184 3.91672 7.94703 3.68594 8.02583C3.4782 8.09677 3.20126 8.20998 2.97462 8.40553C2.76112 8.58976 2.63916 8.81815 2.56971 8.97159C2.49263 9.14189 2.43333 9.32752 2.38581 9.50895C2.29052 9.87283 2.21854 10.3144 2.16365 10.7872C2.05319 11.7386 2 12.9242 2 14.1032C2 15.283 2.05326 16.4858 2.16311 17.4726C2.21784 17.9643 2.28883 18.4229 2.38053 18.807C2.46043 19.1416 2.59126 19.5854 2.85131 19.906C3.08981 20.2 3.43086 20.3352 3.60561 20.3981C3.82965 20.4789 4.09015 20.5429 4.36115 20.596C4.90739 20.703 5.60964 20.7873 6.39637 20.853C7.97657 20.9851 9.99449 21.05 12 21.05C14.0055 21.05 16.0234 20.9851 17.6036 20.853C18.3904 20.7873 19.0926 20.703 19.6388 20.596C19.9098 20.5429 20.1703 20.4789 20.3944 20.3981C20.5691 20.3352 20.9102 20.2 21.1487 19.906C21.4087 19.5854 21.5396 19.1416 21.6195 18.807C21.7112 18.4229 21.7822 17.9643 21.8369 17.4726C21.9467 16.4858 22 15.283 22 14.1032C22 12.9242 21.9468 11.7386 21.8363 10.7872C21.7815 10.3144 21.7095 9.87284 21.6142 9.50896C21.5667 9.32752 21.5074 9.14189 21.4303 8.9716C21.3608 8.81815 21.2389 8.58976 21.0254 8.40554Z"
                        stroke="#333333"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <line
                        x1="11.4858"
                        y1="6.44995"
                        x2="8.39999"
                        y2="3.36416"
                        stroke="#333333"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <line
                        x1="1"
                        y1="-1"
                        x2="5.36396"
                        y2="-1"
                        transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 11.1 6.44995)"
                        stroke="#333333"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="nbl-tabBar__itemCaption">TV+</div>
              </TabBar>
              <MyButton onClick={clickBurger} classes="nbl-tabBar__item">
                {clickToggleBurger ? (
                  <>
                    <div className="nbl-tabBar__itemGlowImage"></div>
                    <div className="nbl-tabBar__itemIcon">
                      <div className="nbl-tabBar__icon">
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 5L5 19M5.00001 5L19 19"
                            //   stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="nbl-tabBar__itemCaption">Закрыть</div>
                  </>
                ) : (
                  <>
                    <div className="nbl-tabBar__itemGlowImage"></div>
                    <div className="nbl-tabBar__itemIcon">
                      <div className="nbl-tabBar__icon">
                        <svg
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          transform="rotate(90)"
                        >
                          <path d="M19 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0 13a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3zm0-26a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="nbl-tabBar__itemCaption">Ещё</div>
                  </>
                )}{" "}
              </MyButton>
            </div>
          </div>
        )}
      </header>

      <NavLink to="/">Главная</NavLink>

      <NavLink to="/films">Фильмы</NavLink>

      <NavLink to="/Movies">Movies</NavLink>
    </div>
  );
};

export default Header;
