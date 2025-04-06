// src/hooks/use-teams.ts
'use client';
import { useState } from 'react';

export type TeamPokemon = {
  id: number;
  name: string;
  sprite: string;
  types: string[];
};

export type Team = {
  id: string;
  name: string;
  pokemons: TeamPokemon[];
};

export function useTeams() {
  const [teams, setTeams] = useState<Team[]>([]);

  const addTeam = (team: Omit<Team, 'id'>) => {
    const newTeam = {
      ...team,
      id: Date.now().toString(),
    };
    setTeams([...teams, newTeam]);
  };

  return { teams, addTeam };
}