// src/app/teams/new/page.tsx
'use client';
import { useState } from 'react';
import { PokemonSelector } from '@/components/pokemon/pokemon-selector';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTeams } from '@/hooks/use-teams';
import { useRouter } from 'next/navigation';

export default function CreateTeamPage() {
  const [teamName, setTeamName] = useState('');
  const [selectedPokemons, setSelectedPokemons] = useState<any[]>([]);
  const { addTeam } = useTeams();
  const router = useRouter();

  const handleAddPokemon = (pokemon: any) => {
    if (selectedPokemons.length < 5) {
      setSelectedPokemons([...selectedPokemons, pokemon]);
    }
  };

  const handleRemovePokemon = (index: number) => {
    setSelectedPokemons(selectedPokemons.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (teamName.trim() && selectedPokemons.length > 0) {
      addTeam({
        name: teamName,
        pokemons: selectedPokemons
      });
      router.push('/teams');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Criar Novo Time</h1>
      
      <div className="mb-6">
        <Input
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Nome do time"
          className="max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Selecionar Pokémon (Máx. 5)</h2>
          <PokemonSelector onSelect={handleAddPokemon} />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">
            Time ({selectedPokemons.length}/5)
          </h2>
          
          {selectedPokemons.length === 0 ? (
            <div className="border rounded-lg p-8 text-center text-gray-500">
              Nenhum Pokémon selecionado
            </div>
          ) : (
            <div className="space-y-4">
              {selectedPokemons.map((pokemon, index) => (
                <div key={index} className="border rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img 
                      src={pokemon.sprite} 
                      alt={pokemon.name}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="capitalize font-medium">{pokemon.name}</span>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemovePokemon(index)}
                  >
                    Remover
                  </Button>
                </div>
              ))}
            </div>
          )}

          <Button
            className="mt-6"
            onClick={handleSubmit}
            disabled={!teamName.trim() || selectedPokemons.length === 0}
          >
            Criar Time
          </Button>
        </div>
      </div>
    </div>
  );
}