export class TodoItem {
    creationDate: Date
    isCompleted: boolean

    constructor(public id: number,
                public title: string,
                public description: string) {
        this.creationDate = new Date()
        this.isCompleted = false
    }
}