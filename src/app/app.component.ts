import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { TodosState } from './store/todos.state';
import { ToDo, ToDosAdd, ToDosUpdate } from './store/model/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'EvoCourse';
  todos: ToDo[] = [];
  newTodo: Omit<ToDo, 'id'> = {
    title: '',
    description: '',
    completed: false,
  };
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.select(TodosState.getTodos).subscribe((data) => {
      this.todos = data;
    });
  }
  addToDo() {
    this.store.dispatch(new ToDosAdd(this.newTodo));
  }
}
