import { TodoItem } from './../TodoItem';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  @Output()
  created: EventEmitter<TodoItem> = new EventEmitter<TodoItem>()

  constructor() { }

  ngOnInit() {
  }

  createItem(form: NgForm) {
    let newTodo = new TodoItem(form.value.title, form.value.body)
    this.created.emit(newTodo)
    form.reset()
  }

}
