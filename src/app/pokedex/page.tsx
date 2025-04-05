import { PokemonList } from '@/components/pokemon/pokemon-list';

export default function PokedexPage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Pokédex</h1>
      <PokemonList />
    </main>
  );
}