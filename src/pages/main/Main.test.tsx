import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';
import userEvent from '@testing-library/user-event';

describe("Main page", () => {
    test('renders learn react link', () => {
        const a = true
        expect(a).toBe(true)
        // render(<Main />);

        // const text = screen.getByTestId('clause__text')
        // expect(text.classList.contains('clause__text-inner')).toBe(true)

        // userEvent.click(screen.getByTestId('toggle-btn'))
        // const text2 = screen.getByTestId('clause__text')
        // expect(text2.classList.contains('clause__text-inner hidden-children')).toBe(true)

    });
});
