import React, { FC, useEffect } from "react";
import { SplideSlide } from "@splidejs/react-splide";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { testSlice } from "../../store/slices/testSlice";
import PersonCard from "../../components/personCard/PersonCard";
import Carousel from "../../components/UI/carousel/Carousel";
import "./Main.scss";

const Main: FC = () => {
  const testData = useAppSelector((state) => state.testReducer.test);
  const dispatch = useAppDispatch();

  console.log(testData);

  useEffect(() => {
    dispatch(testSlice.actions.addTest());
  }, []);

  return (
    <div>
      <br/>
      <Carousel perPage={7} perMove={7}>
        <SplideSlide>
          <PersonCard
            name={'Дэниэл Рэдклифф'}
            image={'https://thumbs.dfs.ivi.ru/storage8/contents/a/a/2d2d1a24a0024ffe5a4cdd7b9371b2.jpg/153x183/?q=85'}
            mainMoviesAmount={6}
          />
        </SplideSlide>
        <SplideSlide>
          <PersonCard
            name={'Дэниэл Рэдклифф'}
            image={'https://thumbs.dfs.ivi.ru/storage8/contents/a/a/2d2d1a24a0024ffe5a4cdd7b9371b2.jpg/153x183/?q=85'}
            mainMoviesAmount={6}
          />
        </SplideSlide>
        <SplideSlide>
          <PersonCard
            name={'Дэниэл Рэдклифф'}
            image={'https://thumbs.dfs.ivi.ru/storage8/contents/a/a/2d2d1a24a0024ffe5a4cdd7b9371b2.jpg/153x183/?q=85'}
            mainMoviesAmount={6}
          />
        </SplideSlide>
        <SplideSlide>
          <PersonCard
            name={'Дэниэл Рэдклифф'}
            image={'https://thumbs.dfs.ivi.ru/storage8/contents/a/a/2d2d1a24a0024ffe5a4cdd7b9371b2.jpg/153x183/?q=85'}
            mainMoviesAmount={6}
          />
        </SplideSlide>
        <SplideSlide>
          <PersonCard
            name={'Дэниэл Рэдклифф'}
            image={'https://thumbs.dfs.ivi.ru/storage8/contents/a/a/2d2d1a24a0024ffe5a4cdd7b9371b2.jpg/153x183/?q=85'}
            mainMoviesAmount={6}
          />
        </SplideSlide>
        <SplideSlide>
          <PersonCard
            name={'Дэниэл Рэдклифф'}
            image={'https://thumbs.dfs.ivi.ru/storage8/contents/a/a/2d2d1a24a0024ffe5a4cdd7b9371b2.jpg/153x183/?q=85'}
            mainMoviesAmount={6}
          />
        </SplideSlide>
        <SplideSlide>
          <PersonCard
            name={'Дэниэл Рэдклифф'}
            image={'https://thumbs.dfs.ivi.ru/storage8/contents/a/a/2d2d1a24a0024ffe5a4cdd7b9371b2.jpg/153x183/?q=85'}
            mainMoviesAmount={6}
          />
        </SplideSlide>
        <SplideSlide>
          <PersonCard
            name={'Дэниэл Рэдклифф'}
            image={'https://thumbs.dfs.ivi.ru/storage8/contents/a/a/2d2d1a24a0024ffe5a4cdd7b9371b2.jpg/153x183/?q=85'}
            mainMoviesAmount={6}
          />
        </SplideSlide>
        <SplideSlide>
          <PersonCard
            name={'Дэниэл Рэдклифф'}
            image={'https://thumbs.dfs.ivi.ru/storage8/contents/a/a/2d2d1a24a0024ffe5a4cdd7b9371b2.jpg/153x183/?q=85'}
            mainMoviesAmount={6}
          />
        </SplideSlide>
        <SplideSlide>
          <PersonCard
            name={'Дэниэл Рэдклифф'}
            image={'https://thumbs.dfs.ivi.ru/storage8/contents/a/a/2d2d1a24a0024ffe5a4cdd7b9371b2.jpg/153x183/?q=85'}
            mainMoviesAmount={6}
          />
        </SplideSlide>
        <SplideSlide>
          <PersonCard
            name={'Дэниэл Рэдклифф'}
            image={'https://thumbs.dfs.ivi.ru/storage8/contents/a/a/2d2d1a24a0024ffe5a4cdd7b9371b2.jpg/153x183/?q=85'}
            mainMoviesAmount={6}
          />
        </SplideSlide>
      </Carousel>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Main;
