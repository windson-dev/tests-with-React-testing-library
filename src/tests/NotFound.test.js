import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './App.test';
import { NotFound } from '../pages';

describe('Testes do componente <NotFound.js />', () => {
  test('A pagina deve conter um texto h2, com uma imagem', () => {
    renderWithRouter(<NotFound />);
    const notFoundTitle = screen.getByRole('heading', {
      level: 2,
      name: /Page requested not found/i });

    const notFoundImg = screen.getByAltText(/Pikachu crying because the page request/i);

    expect(notFoundTitle).toBeInTheDocument();
    expect(notFoundImg.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
