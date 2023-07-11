export interface RespostaAPI<T> {
  count: number;
  next: string;
  previous: string;
  results: T[]
}
