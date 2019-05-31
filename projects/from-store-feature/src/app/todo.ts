export interface Todo {
  readonly description: string;
}

export type Todos = ReadonlyArray<Todo>;
