export interface responseAPI<T> {
  count: number;
  next: string;
  previous: string;
  results: T[]
}
