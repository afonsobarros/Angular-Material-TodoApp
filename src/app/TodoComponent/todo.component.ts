import { Component } from "@angular/core";

@Component({
  selector: "todo-component",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent {
  public tasks: [];

  constructor() {
    this.tasks = [];
  }

  addTask(task: string) {
    if (task === "") return;
    this.tasks.push({
      text: task,
      done: false
    });
  }
  removeTask(task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
  toggle(task) {
    task.done = !task.done;
  }
}
