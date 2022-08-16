import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './App.test';
import Pokemon from '../components/Pokemon';

describe('Testes do componente <Pokemon.js />', () => {
  test('Teste se as informações do pokemon é detalhada corretamente.', () => {
    const pokemon = {
      id: 25,
      name: 'Pikachu',
      type: 'Electric',
      averageWeight: {
        value: '6.0',
        measurementUnit: 'kg',
      },
      image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    };

    const { history } = renderWithRouter(<Pokemon
      pokemon={ pokemon }
      isFavorite
    />);

    const getPokemonImage = screen.getByRole('img', { name: `${pokemon.name} sprite` });
    expect(getPokemonImage).toBeInTheDocument();
    expect(getPokemonImage.src).toContain(pokemon.image);

    const getPokemonStarIcon = screen.getByRole('img', {
      name: `${pokemon.name} is marked as favorite` });

    expect(getPokemonStarIcon).toBeInTheDocument();
    expect(getPokemonStarIcon.src).toContain('/star-icon.svg');

    const getPokemonType = screen.getByTestId('pokemon-type');
    expect(getPokemonType).toBeInTheDocument();
    expect(screen.getByText(pokemon.type)).toBeInTheDocument();

    const getLinkMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(getLinkMoreDetails).toBeInTheDocument();
    userEvent.click(getLinkMoreDetails);
    expect(history.location.pathname).toBe(`/pokemons/${pokemon.id}`);
  });
});
