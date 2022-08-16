import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './App.test';
import { Pokedex } from '../pages';
import pokemons from '../data';

describe('Testes do componente <Pokedex.js />', () => {
  test('Testa se os botões estão com os nomes corretos', () => {
    renderWithRouter(<Pokedex
      pokemons={ pokemons }
      isPokemonFavoriteById={ false }
    />);

    const eletricButtonName = screen.getByRole('button', { name: /electric/i });
    const fireButtonName = screen.getByRole('button', { name: /fire/i });
    const bugButtonName = screen.getByRole('button', { name: /bug/i });
    const poisonButtonName = screen.getByRole('button', { name: /poison/i });
    const psychicButtonName = screen.getByRole('button', { name: /psychic/i });
    const normalButtonName = screen.getByRole('button', { name: /normal/i });
    const dragonButtonName = screen.getByRole('button', { name: /dragon/i });

    expect(eletricButtonName.textContent).toBe('Electric');
    expect(fireButtonName.textContent).toBe('Fire');
    expect(bugButtonName.textContent).toBe('Bug');
    expect(poisonButtonName.textContent).toBe('Poison');
    expect(psychicButtonName.textContent).toBe('Psychic');
    expect(normalButtonName.textContent).toBe('Normal');
    expect(dragonButtonName.textContent).toBe('Dragon');
  });

  test('Testa se é possivel clicar no botão ALL', () => {
    renderWithRouter(<Pokedex
      pokemons={ pokemons }
      isPokemonFavoriteById={ false }
    />);

    const getButtonAll = screen.getByRole('button', { name: /all/i });
    userEvent.click(getButtonAll);
    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
  });
});
