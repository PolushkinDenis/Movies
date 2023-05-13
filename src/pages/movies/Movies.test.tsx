import { Provider } from 'react-redux';
import { setupStore } from "../../store/store";
import userEvent from '@testing-library/user-event';
import Movies from './Movies';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { AutoContext } from '../../context';
import React, { useState } from 'react';
import { IGenresMovies } from '../../types/IGenresMovies';
import { ICountry } from '../../types/ICountry';
import { IPersonFinded } from '../../types/IPerson';

describe("Movies component tests", () => {
    test('drop-down text', () => {

        const TestComponent = () => {
            const [activeGenres, setActiveGenres] = useState<IGenresMovies[]>([]);
            const [activeCountries, setActiveCountries] = React.useState<ICountry[]>([]);
            const [rangeValue, setRangeValue] = React.useState<number>(7.5);
            const [evaluationsValue, setEvaluationsValue] = React.useState<number>(0);
            const [searchDirectorValue, setSearchDirectorValue] = React.useState<string>("");
            const [searchDirectorСhoice, setSearchDirectorСhoice] = React.useState<IPersonFinded>({ personId: -1, nameRu: "" });
            const [searchActorValue, setSearchActorValue] = React.useState<string>("");
            const [searchActorСhoice, setSearchActorСhoice] = React.useState<IPersonFinded>({ personId: -1, nameRu: "" });
            return (
                <MemoryRouter>
                    <AutoContext.Provider value={{
                        activeGenres,
                        setActiveGenres,
                        activeCountries,
                        setActiveCountries,
                        rangeValue,
                        setRangeValue,
                        evaluationsValue,
                        setEvaluationsValue,
                        searchDirectorValue,
                        setSearchDirectorValue,
                        searchDirectorСhoice,
                        setSearchDirectorСhoice,
                        searchActorValue,
                        setSearchActorValue,
                        searchActorСhoice,
                        setSearchActorСhoice,
                    }}>
                        <Provider store={setupStore()}>
                            <Movies />
                        </Provider>
                    </AutoContext.Provider>
                </MemoryRouter>
            )
        }
        render(
            <TestComponent />
        )

        const text = screen.getByTestId('clause__text')
        expect(text.classList.contains('hidden-children')).toBe(true)
        fireEvent.click(screen.getByTestId('toggle-btn'))
        const text2 = screen.getByTestId('clause__text')
        expect(text2.classList.contains('clause__text-inner')).toBe(true)

    })
})

