import { Component } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { TodosService } from '../../services/todos.services';

@Component({
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.scss']
})

export class TodosComponent {

  todos: Todo[];

  constructor(private _todosService: TodosService) {

    this._todosService.getAllTodos().subscribe(res => {
      this.todos = res;
    });

  }
}
