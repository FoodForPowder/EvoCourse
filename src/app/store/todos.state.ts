import { Inject, Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  ToDo,
  ToDosAdd,
  ToDosInterface,
  ToDosUpdate,
} from './model/todo.model';

@State<ToDosInterface>({
  name: 'TodosState',
  defaults: {
    todos: [],
  },
})
@Injectable()
export class TodosState {
  private static todoCount = 0;
  @Selector()
  static getTodos(state: ToDosInterface): ToDo[] {
    return state.todos;
  }
  @Selector()
  static getTodoByid(state: ToDosInterface, id: number): ToDo | undefined {
    return state.todos.find((todo) => todo.id === id);
  }
  @Action(ToDosUpdate)
  updateTodo(ctx: StateContext<ToDosInterface>, action: ToDosUpdate) {
    const state = ctx.getState();
    const mutatedTodos = state.todos.map((val) => {
      if (val.id == action.payload.id) {
        val = { ...val, ...action.payload };
      }
      return val;
    });
    ctx.patchState({
      todos: mutatedTodos,
    });
  }
  @Action(ToDosAdd)
  addTodo(ctx: StateContext<ToDosInterface>, action: ToDosAdd) {
    const state = ctx.getState();
    const newTodo = { id: TodosState.todoCount++, ...action.payload };
    ctx.patchState({
      todos: [...state.todos, newTodo],
    });
  }
}
