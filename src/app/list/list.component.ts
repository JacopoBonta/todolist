import { StorageService } from './../storage.service';
import { TodoItem } from './../TodoItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: TodoItem[] = []

  constructor(private storage: StorageService) {
    // inizializza lista di todo
    this.list = storage.getTodoItems()
  }

  ngOnInit() {
  }
  
  // aggiorna la lista corrente
  updateList() {
    this.list = this.storage.getTodoItems()
  }

}
