import { Injectable } from '@angular/core'
import { TodoItem } from './TodoItem'
import * as _ from 'underscore'

@Injectable()
export class StorageService {

  constructor() { }

  // ritorna il prossimo id disponibile
  getNextId(): number {
    const items = this.getTodoItems()
    if (items.length <= 0) {
      return 0
    }
    let maxId = _.max(items, (item) => item.id).id
    return ++maxId
  }

  // legge dal local storage e ritorna un array di todo
  getTodoItems(): TodoItem[] {
    const items = JSON.parse(localStorage.getItem('todos'))
    return items || []
  }

  // salva l'array di todo nel local storage
  setTodoItems(items: TodoItem[]) {
    localStorage.setItem('todos', JSON.stringify(items))
  }

  // delete a todo
  delete(id: number) {
    const items = this.getTodoItems()
    const index = _.findIndex(items, (item) => item.id === id)
    if (index > -1) {
      items.splice(index, 1)
      this.setTodoItems(items)
    }
  }

  // add a new item
  insert(item: TodoItem) {
    const items = this.getTodoItems()
    items.unshift(item)
    this.setTodoItems(items)
  }

  // update an existing todo item
  update(item: TodoItem) {
    const items = this.getTodoItems()
    const index = _.findIndex(items, (currentItem) => currentItem.id === item.id)
    items[index].title = item.title
    items[index].description = item.description
    items[index].isCompleted = item.isCompleted
    this.setTodoItems(items)
  }
}
