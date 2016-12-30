import { schema } from 'normalizr';

export const todo = new schema.Entity('todo');
export const arrayOfTodos = [ todo ];
