import React from 'react';
import { screen } from '@testing-library/react';
import { About } from '../pages';
import renderWithRouter from './App.test';

describe('Testes do componente <Abount.js />', () => {
  test('A pagina About deve conter o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const aboutTitle = screen.getByRole('heading', { level: 2, name: /About Pokédex/i });
    expect(aboutTitle).toBeInTheDocument();
  });

  test('Testa se a imagem está correta', () => {
    renderWithRouter(<About />);
    const aboutImage = screen.getByAltText(/pokédex/i);
    expect(aboutImage.src)
      .toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
