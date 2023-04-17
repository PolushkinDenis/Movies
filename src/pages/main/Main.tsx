import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { testSlice } from "../../store/slices/testSlice";
import "./Main.scss";

const Main: FC = () => {
  const testData = useAppSelector((state) => state.testReducer.test);
  const dispatch = useAppDispatch();

  console.log(testData);

  useEffect(() => {
    dispatch(testSlice.actions.addTest());
  }, []);
  ////

  return (
    <div>
      <main className="main"></main>
    </div>
  );
};

export default Main;
