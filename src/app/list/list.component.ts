import { TodoItem } from './../TodoItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title: string = ''
  body: string = ''

  list: TodoItem[] = []

  constructor() {
    // cerca una lista di todo nel local storage e se esiste la carica
    let jList = localStorage.getItem("todos")
    if (jList) {
      this.list = JSON.parse(jList)
    }
  }

  ngOnInit() {
  }

  // crea un nuovo oggetto TodoItem e lo aggiunge alla lista
  addItem() {
    if (!this.title || !this.body) {
      return
    }
    let newTodo = new TodoItem(this.title, this.body)
    this.list.unshift(newTodo)
    this.title = ''
    this.body = ''
    this.saveList()
  }

  // salva la lista ti todo nel local storage
  saveList() {
    let str = JSON.stringify(this.list)
    if (str) {
      localStorage.setItem("todos", str)
    }
  }

  // funzione che viene chiamata all'evento delete di app-item.
  // trova l'indice dell'elemento e lo cancella dalla lista
  deleteHandler(item: TodoItem) {
    let idx = this.list.findIndex((todo) => todo.title === item.title && todo.description === todo.description)
    if (idx > -1) {
      this.list.splice(idx, 1)
    }
    this.saveList()
  }

  rearrangeList() {
    this.list.sort((x, y) => {
      return !x.isCompleted && !y.isCompleted ? 0 : y.isCompleted ? -1 : 1
    })
    this.saveList()
  }

}
