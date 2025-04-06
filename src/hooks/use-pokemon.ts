// src/hooks/use-pokemon.ts
'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchPokemonList } from '@/lib/pokeapi';

export function usePokemonList() {
  return useQuery({
    queryKey: ['pokemon-list'],
    queryFn: () => fetchPokemonList(1000),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
}