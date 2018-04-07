import { Component, OnInit ,Input} from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { trigger, style, transition, animate, query, stagger, keyframes } from '@angular/animations'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    trigger('todos',[
      transition('* => *', [
        query(':enter', style({opacity:0}), {optional:true}),

        query(':enter', stagger('300ms',[
          animate('.6s ease-in', keyframes([
            style({opacity:0,transform:'translateY(-75%)',offset:0}),
            style({opacity:.5,transform:'translateY(35px)',offset:.3}),
            style({opacity:1,transform:'translateY(0)',offset:1}),
            ]))]), {optional:true}),
        query(':leave', stagger('300ms',[
          animate('.6s ease-in', keyframes([
            style({opacity:1,transform:'translateY(0)',offset:0}),
            style({opacity:.5,transform:'translateY(35px)',offset:.3}),
            style({opacity:0,transform:'translateY(-75%)',offset:1}),
            ]))]), {optional:true})
      ])
  ])
    ]
})
export class TodoComponent implements OnInit {

	todos: Todo[];

   @Input() todo: Todo;

  constructor(private todoService :TodoService ) { this.todo = new Todo(); }

  ngOnInit() {
  	this.todos = this.todoService.getTodos();
  }

  addTodo(){
  	this.todoService.addTodo(this.todo);
  	this.todo = new Todo();
  }

  removeTodo(i:number){
    this.todoService.removeTodo(i);
  }

}
