// src/app/teams/page.tsx
'use client';
import { TeamCard } from '@/components/teams/team-card';
import { useTeams } from '@/hooks/use-teams';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TeamsPage() {
  const { teams } = useTeams();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Meus Times</h1>
        <Link href="/teams/new">
          <Button>Criar Novo Time</Button>
        </Link>
      </div>

      {teams.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500 mb-4">Você ainda não tem times criados</p>
          <Link href="/teams/new">
            <Button>Criar Primeiro Time</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teams.map(team => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      )}
    </div>
  );
}