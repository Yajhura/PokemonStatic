export interface PokeAPi {
  count: number;
  next?: string;
  previous?: null;
  results: PokeResult[];
}

export interface PokeResult {
  name: string;
  url: string;
  id: number;
  img : string;
}
