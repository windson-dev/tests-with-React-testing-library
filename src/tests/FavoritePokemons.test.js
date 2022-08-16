import React from 'react';
import { screen } from '@testing-library/react';
import { FavoritePokemons } from '../pages';
import renderWithRouter from './App.test';

describe('Testes do componente <FavoritePokemons.js />', () => {
  test('A pagina About deve conter o texto About Pokédex', () => {
    renderWithRouter(<FavoritePokemons />);
    const favoritePokemonsPhrase = screen.getByText('No favorite pokemon found');
    expect(favoritePokemonsPhrase).toBeInTheDocument();
  });
});
