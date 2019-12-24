import { Todos } from '../todos';

export interface State {
  readonly todos: Todos;
  readonly username: string;
}
