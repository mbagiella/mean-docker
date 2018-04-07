import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Todo } from './todo';

@Injectable()
export class TodoService {


	todos= [{title:"Example of todo",description:"first todo",level:2,id:1}];

	count=1;

	addTodo(todo){
		this.todos.push(todo);
		this.count=this.todos.length;
	}

	removeTodo(id){
		this.todos.splice(id,1);
		this.count=this.todos.length;
	}

	getTodos(){
		return this.todos;
	}

  constructor() { }

}
