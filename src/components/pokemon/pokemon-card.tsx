'use client';

import { useQuery } from '@tanstack/react-query';
import { getPokemon } from '@/lib/pokeapi';

export function PokemonCard({ name }: { name: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => getPokemon(name),
  });

  if (isLoading) {
    return (
      <div className="bg-gray-100 rounded-lg p-4 h-40 animate-pulse"></div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-gray-100 p-4 flex justify-center">
        {data?.sprites?.front_default ? (
          <img 
            src={data.sprites.front_default} 
            alt={name}
            className="h-24 w-24 object-contain"
          />
        ) : (
          <div className="h-24 w-24 bg-gray-200 flex items-center justify-center">
            🎴
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg capitalize">{name}</h3>
        <p className="text-gray-600">#{data?.id.toString().padStart(3, '0')}</p>
      </div>
    </div>
  );
}