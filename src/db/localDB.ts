import Dexie, { Table } from 'dexie';
import { todoType } from '../models/todo';

class DB extends Dexie {
  todo!: Table<todoType>;

  constructor() {
    super('localDB');
    this.version(1).stores({
      todo: '++id, text',
    });
  }

  getTodoList = () => this.todo.toArray();

  addTodo = (addText: string) => {
    this.transaction('rw', this.todo, async () => {
      try {
        this.todo.put({ text: addText });
      } catch (error) {
        console.log(error);
      }
    });
  };

  deleteTodo = (id: number) => {
    this.transaction('rw', this.todo, async () => {
      try {
        this.todo.where('id').equals(id).delete();
      } catch (error) {
        console.log(error);
      }
    });
  };
}

export const localDB = new DB();
