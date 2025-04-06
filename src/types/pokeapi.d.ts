
declare module 'pokeapi-types' {
    export interface Pokemon {
      id: number;
      name: string;
      sprites: {
        front_default: string;
      };
      types: {
        slot: number;
        type: {
          name: string;
          url: string;
        };
      }[];
    }
  
    export interface PokemonListItem {
      name: string;
      url: string;
    }
  
    export interface PokemonListResponse {
      count: number;
      next: string | null;
      previous: string | null;
      results: PokemonListItem[];
    }
  
    export interface TeamPokemon {
      id: number;
      name: string;
      sprite: string;
      types: string[];
    }
  
    export interface Team {
      id: string;
      name: string;
      pokemons: TeamPokemon[];
    }
}