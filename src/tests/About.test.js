import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { About } from '../pages';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>), history,
  });
};
export default renderWithRouter;

describe('Testes do componente <Abount.js />', () => {
  test('A pagina About deve conter o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const aboutTitle = screen.getByRole('heading', { level: 2, name: /About Pokédex/i });
    expect(aboutTitle).toBeInTheDocument();
  });

  test('Testa se a imagem está correta', () => {
    renderWithRouter(<About />);
    const aboutImage = screen.getByRole('img', { name: /Pokédex/i });
    expect(aboutImage).toBeInTheDocument();
  });
});
