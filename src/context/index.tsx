import React, { useState, createContext } from "react";
import { IGenresMovies } from "../types/IGenresMovies";
import { ICountry } from "../types/ICountry";
import { IPersonFinded } from "../types/IPerson";

interface typeAutoContext {
  activeGenres: IGenresMovies[];
  setActiveGenres: React.Dispatch<React.SetStateAction<IGenresMovies[]>>;
  activeCountries: ICountry[];
  setActiveCountries: React.Dispatch<React.SetStateAction<ICountry[]>>;
  rangeValue: number;
  setRangeValue: React.Dispatch<React.SetStateAction<number>>;
  evaluationsValue: number;
  setEvaluationsValue: React.Dispatch<React.SetStateAction<number>>;

  searchDirectorValue: string;
  setSearchDirectorValue: React.Dispatch<React.SetStateAction<string>>;
  searchDirectorСhoice: IPersonFinded;
  setSearchDirectorСhoice: React.Dispatch<React.SetStateAction<IPersonFinded>>;
  searchActorValue: string;
  setSearchActorValue: React.Dispatch<React.SetStateAction<string>>;
  searchActorСhoice: IPersonFinded;
  setSearchActorСhoice: React.Dispatch<React.SetStateAction<IPersonFinded>>;
}

export const AutoContext = createContext<typeAutoContext>(
  {} as typeAutoContext
);

export default function ContextFc({ children }: any) {
  const [activeGenres, setActiveGenres] = useState<IGenresMovies[]>([]);
  const [activeCountries, setActiveCountries] = React.useState<ICountry[]>([]);
  const [rangeValue, setRangeValue] = React.useState<number>(7.5);
  const [evaluationsValue, setEvaluationsValue] = React.useState<number>(0);
  //
  const [searchDirectorValue, setSearchDirectorValue] =
    React.useState<string>("");
  const [searchDirectorСhoice, setSearchDirectorСhoice] =
    React.useState<IPersonFinded>({ personId: -1, nameRu: "" });
  //
  const [searchActorValue, setSearchActorValue] = React.useState<string>("");
  const [searchActorСhoice, setSearchActorСhoice] =
    React.useState<IPersonFinded>({ personId: -1, nameRu: "" });
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
        //
        searchDirectorValue,
        setSearchDirectorValue,
        searchDirectorСhoice,
        setSearchDirectorСhoice,
        searchActorValue,
        setSearchActorValue,
        searchActorСhoice,
        setSearchActorСhoice,
      }}
    >
      {children}
    </AutoContext.Provider>
  );
}
