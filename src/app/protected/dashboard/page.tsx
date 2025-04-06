'use client';
import { useTeams } from '@/hooks/use-teams';
import { TeamCard } from '@/components/teams/team-card';
import { PokemonSelector } from '@/components/pokemon/pokemon-selector';

export default function Dashboard() {
  const { teams, addTeam, addPokemonToTeam } = useTeams();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Meus Times Pokémon</h1>
      
      <button 
        onClick={() => addTeam(`Novo Time ${teams.length + 1}`)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Criar Novo Time
      </button>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teams.map(team => (
          <div key={team.id}>
            <TeamCard team={team} />
            <PokemonSelector 
              onSelect={(pokemon) => addPokemonToTeam(team.id, pokemon)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}