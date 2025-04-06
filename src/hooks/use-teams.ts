// src/hooks/use-teams.ts
'use client';
import { useState } from 'react';
import type { Team, TeamPokemon } from 'pokeapi-types';

export function useTeams() {
  const [teams, setTeams] = useState<Team[]>([]);

  const addTeam = (name: string) => {
    setTeams([...teams, { 
      id: Date.now().toString(), 
      name, 
      pokemons: [] 
    }]);
  };

  const addPokemonToTeam = (teamId: string, pokemon: TeamPokemon) => {
    setTeams(teams.map(team => 
      team.id === teamId && team.pokemons.length < 5
        ? { ...team, pokemons: [...team.pokemons, pokemon] }
        : team
    ));
  };

  return { teams, addTeam, addPokemonToTeam };
}