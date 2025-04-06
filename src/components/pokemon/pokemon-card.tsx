'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchPokemon } from '@/lib/pokeapi';

export function PokemonCard({ name }: { name: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => fetchPokemon(name),
  });

  if (isLoading) return <div>Carregando...</div>;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="font-bold text-lg capitalize">{name}</h3>
      {data?.sprite && (
        <img 
          src={data.sprite}
          alt={name}
          className="mx-auto"
        />
      )}
      <div className="mt-2">
        <p>ID: {data?.id}</p>
        <p>Tipos: {data?.types?.join(', ')}</p> {/* Já é array de strings */}
      </div>
    </div>
  );
}