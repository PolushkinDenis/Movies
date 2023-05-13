import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Main from './Main';
import { Provider } from 'react-redux';
import { setupStore } from "../../store/store";
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

describe("Main page", () => {
    test('drop-down text', () => {
        render(
            <MemoryRouter>
                <Provider store={setupStore()}>
                    <Main />
                </Provider>
            </MemoryRouter>
        )
        const text = screen.getByTestId('clause__text')
        expect(text.classList.contains('hidden-children')).toBe(true)
        fireEvent.click(screen.getByTestId('toggle-btn'))
        const text2 = screen.getByTestId('clause__text')
        expect(text2.classList.contains('clause__text-inner')).toBe(true)
    });
    // test('test footer routers', () => {
    //     render(
    //         <MemoryRouter>
    //             <Provider store={setupStore()}>
    //                 <Main />
    //             </Provider>
    //         </MemoryRouter>
    //     )
    //     const my_ivi_link = screen.getByTestId('Мой Иви')
    //     const films_link = screen.getByTestId('Фильмы')

    //     userEvent.click(my_ivi_link)
    //     expect(screen.getByTestId('main__header')).toBeInTheDocument()

    //     userEvent.click(films_link)
    //     expect(screen.getByTestId('movies__header')).toBeInTheDocument()

    // })
});
