import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import App from '../App';
import { NotFound } from '../pages';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>), history,
  });
};
export default renderWithRouter;

describe('Testes do componente <App.js />', () => {
  test('O primeiro link deve possuir o texto Home', () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();

    userEvent.click(linkHome);
    expect(history.location.pathname).toBe('/');
  });

  test('O segundo link deve possuir o texto About', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /About/i });
    expect(linkAbout).toBeInTheDocument();

    userEvent.click(linkAbout);
    expect(history.location.pathname).toBe('/about');
  });

  test('O terceiro link deve possuir o texto Favorite', () => {
    const { history } = renderWithRouter(<App />);
    const linkFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(linkFavorite).toBeInTheDocument();

    userEvent.click(linkFavorite);
    expect(history.location.pathname).toBe('/favorites');
  });

  test('PathName invalido vai para a pagina NOT FOUND', () => {
    const { history } = renderWithRouter(<NotFound />);
    history.push('/qualquercoisa');

    const notFoundTitle = screen.getByRole('heading', {
      level: 2, name: /Page requested not found Crying emoji/i });

    expect(notFoundTitle).toBeInTheDocument();
  });
});
