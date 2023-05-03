import React, { useState, createContext } from "react";
import { IGenresMovies } from "../types/IGenresMovies";
import { ICountry } from "../types/ICountry";
interface typeAutoContext {
  activeGenres: IGenresMovies[];
  setActiveGenres: React.Dispatch<React.SetStateAction<IGenresMovies[]>>;
  activeCountries: ICountry[];
  setActiveCountries: React.Dispatch<React.SetStateAction<ICountry[]>>;
}

export const AutoContext = createContext<typeAutoContext>(
  {} as typeAutoContext
);

export default function ContextFc({ children }: any) {
  const [activeGenres, setActiveGenres] = useState<IGenresMovies[]>([]);
  const [activeCountries, setActiveCountries] = React.useState<ICountry[]>([]);

  return (
    <AutoContext.Provider
      value={{
        activeGenres,
        setActiveGenres,
        activeCountries,
        setActiveCountries,
      }}
    >
      {children}
    </AutoContext.Provider>
  );
}
