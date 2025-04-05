'use client';

import { usePokemonList } from '@/hooks/use-pokemon';
import { PokemonCard } from './pokemon-card';

export function PokemonList() {
  const { 
    data, 
    isLoading, 
    isError 
  } = usePokemonList();

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (isError) {
    return <div className="text-red-500 p-4">Erro ao carregar Pokémon</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {data?.results.map((pokemon: { name: string }) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
}