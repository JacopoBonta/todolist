import { StorageService } from './../storage.service'
import { TodoItem } from './../TodoItem'
import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  @Output()
  created: EventEmitter<TodoItem> = new EventEmitter<TodoItem>()

  constructor(private storage: StorageService) { }

  ngOnInit() {
  }

  createItem(form: NgForm) {
    const newItem = new TodoItem(this.storage.getNextId(), form.value.title, form.value.body)
    this.storage.insert(newItem)
    this.created.emit()
    form.reset()
  }
}
