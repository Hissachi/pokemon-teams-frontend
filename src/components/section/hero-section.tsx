import Link from "next/link";

export function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto bg-white/90 dark:bg-gray-800/90 p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Seja um Mestre Pokémon!
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Junte seus Pokémon favoritos e domine as batalhas!
      </p>
      <div className="flex gap-4">
        <Link href="/team-builder" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
          Começar Agora
        </Link>
        <Link href="/explore" className="px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg font-medium">
          Explorar Times
        </Link>
      </div>
    </div>
  );
}