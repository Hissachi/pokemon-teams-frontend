// src/components/pokemon/pokemon-list.tsx
'use client';
import { usePokemonList } from '@/hooks/use-pokemon';
import Image from 'next/image';

export function PokemonList() {
  const { data, isLoading, error } = usePokemonList();

  // Estados de carregamento e erro
  if (isLoading) return <div className="text-center py-8">Carregando Pokémon...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Erro ao carregar Pokémon</div>;
  
  // Verifica se data existe e tem a propriedade results
  if (!data || !Array.isArray(data)) {
    return <div className="text-center py-8">Nenhum Pokémon encontrado</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {data.map((pokemon) => {
        // Extrai o ID do Pokémon da URL
        const pokemonId = pokemon.url.split('/').filter(Boolean).pop();
        
        return (
          <div key={pokemon.name} className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <div className="relative h-24 w-full">
              {pokemonId && (
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                  alt={pokemon.name}
                  fill
                  className="object-contain"
                  unoptimized // Remove se quiser usar a otimização do Next.js
                />
              )}
            </div>
            <p className="font-medium capitalize mt-2">
              {pokemon.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}