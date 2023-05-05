import React, { useState, createContext } from "react";
import { IGenresMovies } from "../types/IGenresMovies";
import { ICountry } from "../types/ICountry";
interface typeAutoContext {
  activeGenres: IGenresMovies[];
  setActiveGenres: React.Dispatch<React.SetStateAction<IGenresMovies[]>>;
  activeCountries: ICountry[];
  setActiveCountries: React.Dispatch<React.SetStateAction<ICountry[]>>;
  rangeValue: number;
  setRangeValue: React.Dispatch<React.SetStateAction<number>>;
  evaluationsValue: number;
  setEvaluationsValue: React.Dispatch<React.SetStateAction<number>>;
}

export const AutoContext = createContext<typeAutoContext>(
  {} as typeAutoContext
);

export default function ContextFc({ children }: any) {
  const [activeGenres, setActiveGenres] = useState<IGenresMovies[]>([]);
  const [activeCountries, setActiveCountries] = React.useState<ICountry[]>([]);
  const [rangeValue, setRangeValue] = React.useState<number>(7.5);
  const [evaluationsValue, setEvaluationsValue] = React.useState<number>(0);

  return (
    <AutoContext.Provider
      value={{
        activeGenres,
        setActiveGenres,
        activeCountries,
        setActiveCountries,
        rangeValue,
        setRangeValue,
        evaluationsValue,
        setEvaluationsValue,
      }}
    >
      {children}
    </AutoContext.Provider>
  );
}
