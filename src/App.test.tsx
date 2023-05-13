import React, { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from "./store/store";
import userEvent from '@testing-library/user-event';
import { AutoContext } from './context';
import { IGenresMovies } from './types/IGenresMovies';
import { ICountry } from './types/ICountry';
import { IPersonFinded } from './types/IPerson';

describe("App component tests", () => {
  test('test footer routers', () => {
    
  //   const TestComponent = () => {
  //     const [activeGenres, setActiveGenres] = useState<IGenresMovies[]>([]);
  //     const [activeCountries, setActiveCountries] = React.useState<ICountry[]>([]);
  //     const [rangeValue, setRangeValue] = React.useState<number>(7.5);
  //     const [evaluationsValue, setEvaluationsValue] = React.useState<number>(0);
  //     const [searchDirectorValue, setSearchDirectorValue] = React.useState<string>("");
  //     const [searchDirectorСhoice, setSearchDirectorСhoice] = React.useState<IPersonFinded>({ personId: -1, nameRu: "" });
  //     const [searchActorValue, setSearchActorValue] = React.useState<string>("");
  //     const [searchActorСhoice, setSearchActorСhoice] = React.useState<IPersonFinded>({ personId: -1, nameRu: "" });
  //     return (
  //             <AutoContext.Provider value={{
  //                 activeGenres,
  //                 setActiveGenres,
  //                 activeCountries,
  //                 setActiveCountries,
  //                 rangeValue,
  //                 setRangeValue,
  //                 evaluationsValue,
  //                 setEvaluationsValue,
  //                 searchDirectorValue,
  //                 setSearchDirectorValue,
  //                 searchDirectorСhoice,
  //                 setSearchDirectorСhoice,
  //                 searchActorValue,
  //                 setSearchActorValue,
  //                 searchActorСhoice,
  //                 setSearchActorСhoice,
  //             }}>
  //                 <Provider store={setupStore()}>
  //                     <App />
  //                 </Provider>
  //             </AutoContext.Provider>
  //     )
  // }
  // render (
  //   <TestComponent />
  // )

    render(
        <Provider store={setupStore()}>
          <App />
        </Provider>
    )

    const my_ivi_link = screen.getByTestId('Мой Иви')
    fireEvent.click(my_ivi_link)
    expect(screen.getByTestId('main__header')).toBeInTheDocument()

    // const films_link = screen.getByTestId('Фильмы')
    // fireEvent.click(films_link)
    // expect(screen.getByTestId('movies__header')).toBeInTheDocument()
  })
})

