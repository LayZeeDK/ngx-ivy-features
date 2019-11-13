export interface ApplicationStorage {
  delete(key: string): void;
  load(key: string): string | null;
  save(key: string, value: string): void;
}
