import { StorageService } from './../storage.service';
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
  @Output() deleted: EventEmitter<TodoItem> = new EventEmitter()
  @Output() updated: EventEmitter<TodoItem> = new EventEmitter()

  counterIsHidden = true

  constructor(private storage: StorageService) { }

  ngOnInit() {
  }

  // rimuove l'elemento e notifica la lista
  removeItem() {
    this.storage.delete(this.data.id)
    this.deleted.emit(this.data)
  }

  // aggiorna l'elemento e notifica la lista
  updateItem() {
    this.storage.update(this.data)
    this.updated.emit(this.data)
  }
}
