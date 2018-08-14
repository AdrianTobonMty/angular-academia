import { Component } from '@angular/core';
import { TodosService } from '../../../services/todos.services';
import { Todo } from '../../../interfaces/todo.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html'
})

export class TodoComponent {

  todo: Todo;
  constructor(private _todosService: TodosService,
              private route: ActivatedRoute) {

    this.route.params.subscribe(res => {
      let id;
      id = res['id'];
      console.log('id', id);

      this._todosService.getTodo(id).subscribe( todo => {
        this.todo = todo;
      });
    });
  }
}
