import axios from 'axios';
import type { Pokemon, PokemonListResponse, PokemonListItem } from 'pokeapi-types';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});

export const fetchPokemon = async (idOrName: string): Promise<{
  id: number;
  name: string;
  sprite: string;
  types: string[];
}> => {
  const { data } = await api.get<Pokemon>(`/pokemon/${idOrName}`);
  return {
    id: data.id,
    name: data.name,
    sprite: data.sprites.front_default,
    types: data.types.map((t) => t.type.name)
  };
};

export const searchPokemons = async (query: string): Promise<PokemonListItem[]> => {
  const { data } = await api.get<PokemonListResponse>(`/pokemon?limit=1000`);
  return data.results.filter((p) => 
    p.name.includes(query.toLowerCase())
  ).slice(0, 20);
};

export const getPokemon = async (idOrName: string): Promise<Pokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
  if (!response.ok) throw new Error('Pokémon não encontrado');
  return response.json() as Promise<Pokemon>;
};

export const fetchPokemonList = async (limit: number = 20): Promise<PokemonListItem[]> => {
  const { data } = await api.get<PokemonListResponse>(`/pokemon?limit=${limit}`);
  return data.results;
};