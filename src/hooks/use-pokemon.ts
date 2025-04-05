'use client';

import { useQuery } from '@tanstack/react-query';
import { getPokemonList } from '@/lib/pokeapi';

export function usePokemonList() {
  return useQuery({
    queryKey: ['pokemons'], // Chave única para o cache
    queryFn: () => getPokemonList(20), // Função que busca os dados
    staleTime: 1000 * 60 * 5, // Dados ficam "frescos" por 5 minutos
  });
}