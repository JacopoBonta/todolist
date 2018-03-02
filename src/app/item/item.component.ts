import { FormsModule } from '@angular/forms';
import { TodoItem } from './../TodoItem';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() data: TodoItem
  @Output() delete: EventEmitter<TodoItem> = new EventEmitter()
  @Output() save: EventEmitter<null> = new EventEmitter()
  @Output() checked: EventEmitter<null> = new EventEmitter()

  hideCounter: boolean = true

  constructor() { }

  ngOnInit() {
  }

  // emette l'evento delete di app-item
  remove() {
    this.delete.emit(this.data)
  }

  // funzione che viene chiamata qunado viene sputata la checkbox
  // emette l'evneto checked di app-item
  checkboxHandler() {
    this.checked.emit()
  }

  // funzione che viene chiamata qunado un elemento di ipnut viene modificato
  // emette l'evento save di app-item
  ipnutHandler() {
    this.save.emit()
  }
}
