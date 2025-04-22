export interface ToDosInterface {
  todos: ToDo[];
}
export interface ToDo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
export class ToDosUpdate {
  static readonly type = '[Todos]: Todos Updated';
  constructor(public payload: ToDo) {}
}
export class ToDosAdd {
    static readonly type = '[Todos]: Todos Added';
    constructor(public payload: Omit<ToDo, "id">) {}
  }
