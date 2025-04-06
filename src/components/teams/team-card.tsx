// src/components/teams/team-card.tsx
'use client';
import Image from 'next/image';
import { Team } from '@/hooks/use-teams';

export function TeamCard({ team }: { team: Team }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg mb-3">{team.name}</h3>
      <div className="grid grid-cols-3 gap-2">
        {team.pokemons.map((pokemon) => (
          <div key={pokemon.id} className="relative group">
            <Image
              src={pokemon.sprite}
              alt={pokemon.name}
              width={80}
              height={80}
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs text-center p-1 opacity-0 group-hover:opacity-100 transition-opacity capitalize">
              {pokemon.name}
            </div>
          </div>
        ))}
        {Array(5 - team.pokemons.length).fill(0).map((_, i) => (
          <div key={`empty-${i}`} className="border-2 border-dashed rounded aspect-square" />
        ))}
      </div>
    </div>
  );
}