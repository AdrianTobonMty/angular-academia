import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { TodoComponent } from './todos/todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { PadreComponent } from '../components/input-output/padre.component';
import { HijoComponent } from '../components/input-output/hijo/hijo.component';
import { ReactiveFormsComponent } from '../components/reactive-forms/reactive-forms.component';
import { NietoComponent } from '../components/input-output/nieto/nieto.component';

// Services
import { TodosService } from '../services/todos.services';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos' },
  { path: 'todos', component: TodosComponent },
  { path: 'todos/:id', component: TodoComponent },
  { path: 'input-output', component: PadreComponent },
  { path: 'forms', component: ReactiveFormsComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    PadreComponent,
    HijoComponent,
    ReactiveFormsComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
