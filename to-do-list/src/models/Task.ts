export default class Task {
    constructor(public id: string, public description: string, public completed: boolean = false) {

    }

    markCompleted = (): void => {
        this.completed = !this.completed;
    }
}