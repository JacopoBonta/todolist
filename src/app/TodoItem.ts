export class TodoItem {
    creationDate: Date
    isCompleted: boolean

    constructor(public title: string, public description: string) {
        this.creationDate = new Date()
        this.isCompleted = false
    }
}