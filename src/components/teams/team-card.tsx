'use client';
import Image from 'next/image';
import type { Team } from 'pokeapi-types';

export function TeamCard({ team }: { team: Team }) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-bold">{team.name}</h3>
      <div className="grid grid-cols-5 gap-2 mt-2">
        {team.pokemons.map((p) => (
          <div key={p.id} className="relative">
            <Image
              src={p.sprite}
              alt={p.name}
              width={64}
              height={64}
              className="object-contain"
            />
            <span className="absolute bottom-0 left-0 right-0 text-xs text-center bg-black/50 text-white">
              {p.name}
            </span>
          </div>
        ))}
        {Array(5 - team.pokemons.length).fill(0).map((_, i) => (
          <div key={`empty-${i}`} className="border-2 border-dashed rounded w-16 h-16" />
        ))}
      </div>
    </div>
  );
}