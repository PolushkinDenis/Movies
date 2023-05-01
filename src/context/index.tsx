import React, { useState, createContext } from "react";
import { IGenresMovies } from "../types/IGenresMovies";

interface typeAutoContext {
  activeGenres: IGenresMovies[];
  setActiveGenres: React.Dispatch<React.SetStateAction<IGenresMovies[]>>;
  activeCountries: IGenresMovies[];
  setActiveCountries: React.Dispatch<React.SetStateAction<IGenresMovies[]>>;
}

export const AutoContext = createContext<typeAutoContext>(
  {} as typeAutoContext
);

export default function ContextFc({ children }: any) {
  const [activeGenres, setActiveGenres] = useState<IGenresMovies[]>([]);
  const [activeCountries, setActiveCountries] = React.useState<IGenresMovies[]>(
    []
  );

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
