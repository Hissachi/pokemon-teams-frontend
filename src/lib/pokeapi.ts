const API_BASE_URL = 'https://pokeapi.co/api/v2';

// Função genérica para fazer requisições
async function fetchPokeAPI(endpoint: string) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  
  if (!response.ok) {
    throw new Error('Falha ao buscar dados');
  }

  return response.json();
}

// Busca informações básicas de um Pokémon
export async function getPokemon(name: string) {
  return fetchPokeAPI(`/pokemon/${name.toLowerCase()}`);
}

// Busca lista de Pokémon (com paginação)
export async function getPokemonList(limit = 20, offset = 0) {
  return fetchPokeAPI(`/pokemon?limit=${limit}&offset=${offset}`);
}

// Busca detalhes de um tipo de Pokémon
export async function getPokemonType(type: string) {
  return fetchPokeAPI(`/type/${type.toLowerCase()}`);
}