'use client';
import { useState } from 'react';
import { searchPokemons, fetchPokemon } from '@/lib/pokeapi';
import type { TeamPokemon } from 'pokeapi-types';

export function PokemonSelector({ onSelect }: { onSelect: (p: TeamPokemon) => void }) {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<{name: string}[]>([]);

  const handleSearch = async () => {
    const data = await searchPokemons(search);
    setResults(data);
  };

  const handleSelect = async (name: string) => {
    const pokemon = await fetchPokemon(name);
    onSelect(pokemon);
    setSearch('');
    setResults([]);
  };

  return (
    <div className="mt-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar Pokémon..."
        className="border p-2 rounded"
      />
      <button 
        onClick={handleSearch}
        className="bg-gray-200 p-2 ml-2 rounded"
      >
        Buscar
      </button>

      {results.length > 0 && (
        <ul className="mt-2 border rounded">
          {results.map(pokemon => (
            <li 
              key={pokemon.name}
              onClick={() => handleSelect(pokemon.name)}
              className="p-2 hover:bg-gray-100 cursor-pointer capitalize"
            >
              {pokemon.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}