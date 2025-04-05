export function Footer() {
    return (
      <footer className="bg-white/90 dark:bg-gray-800/90 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Poké-Teams - Não afiliado à Nintendo ou The Pokémon Company
        </div>
      </footer>
    );
  }