class TaskBuilder {
  constructor() {
    this.task = new Task(0, "");
  }
  setId(id) {
    this.task.id = id;
    return this;
  }
  setDescription(description) {
    this.task.description = description;
    return this;
  }
  setCompleted(completed) {
    this.task.completed = completed;
    return this;
  }
  setUsers(users) {
    this.task.users = users;
    return this;
  }
  setDeadline(deadline) {
    this.task.deadline = deadline;
    return this;
  }
  setPriority(priority) {
    this.task.priority = priority;
    return this;
  }
  build() {
    return this.task;
  }
}

class TaskDecorator {
  constructor(task, options) {
    this.task = task;
    this.deadline = options.deadline;
    this.priority = options.priority;
  }
  assignUser(user) {
    this.task.users.push(user);
  }
  completeTask() {
    this.task.completed = true;
  }
  notifyUsers() {
    this.task.users.map((user) => user.notify(this));
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
  notify(task) {
    const notify = `✅ ${this.name}, la tarea '${task.description}' fue completada`;
    console.log(notify);
    return notify;
  }
}

class Authorization {
  checkAuthorization(user, task) {
    if (!task.users.some((userTaks) => userTaks == user)) {
      throw new Error("No autorizado");
    }
    return true;
  }
}

class TaskManager {
  instance;
  tasks = [];
  constructor() {
    // 🔐 Sin constructor
  }
  static getInstance() {
    if (!TaskManager.instance) {
      TaskManager.instance = new TaskManager();
    }
    return TaskManager.instance;
  }
  addTask(task) {
    if (task instanceof Task) {
      TaskManager.instance.tasks.push(task);
    }
  }
  getTasks() {
    return TaskManager.instance.tasks;
  }
  getTaskById(id) {
    return TaskManager.instance.tasks.find((task) => task.id === id) || null;
  }
}

class Task {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.completed = false;
    this.users = [];
  }
  assignUser(user) {
    if (!(user instanceof User)) {
      throw new Error("Usuario no valido");
    }
    this.users.push(user);
  }
  completeTask() {
    this.completed = true;
    this.notifyUsers();
  }
  notifyUsers() {
    this.users.map((user) => user.notify(this));
  }
}

const task = new Task("5", "Pasear al perro");
const pedro = new User("pedro");
const taskDecorator = new TaskDecorator(task, {
  deadline: "2023-03-31",
  priority: "alta",
});
taskDecorator.assignUser(pedro);

console.log(taskDecorator);
