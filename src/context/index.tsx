import React, { useState, createContext } from "react";

interface typeAutoContext {
  activeGenres: string[];
  setActiveGenres: React.Dispatch<React.SetStateAction<string[]>>;
  activeCountries: string[];
  setActiveCountries: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AutoContext = createContext<typeAutoContext>(
  {} as typeAutoContext
);

export default function ContextFc({ children }: any) {
  const [activeGenres, setActiveGenres] = useState<string[]>([]);
  const [activeCountries, setActiveCountries] = React.useState<string[]>([]);

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
