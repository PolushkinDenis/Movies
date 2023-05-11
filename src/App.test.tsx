import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from "./store/store";

test('renders learn react link', () => {
  render(
    <Provider store={setupStore()}>
      <App />
    </Provider>
    
  );

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
