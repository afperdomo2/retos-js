class Messages {
  // No debes editar este código ❌
  constructor() {
    this.history = [];
  }
  sendMessage(text) {
    this.history.push(text);
  }
  getHistory() {
    return this.history;
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.loggedIn = false;
  }
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
  isLoggedIn() {
    return this.loggedIn;
  }
}

class MessagesProxy {
  constructor(messages, user) {
    this.messages = messages;
    this.user = user;
  }
  sendMessage(text) {
    if (!this.user.isLoggedIn()) {
      throw new Error("Usuario no registrado");
    }
    this.messages.sendMessage(text);
  }
  getHistory() {
    if (!this.user.isLoggedIn()) {
      throw new Error("Usuario no registrado");
    }
    return this.messages.getHistory();
  }
}

const user = new User("John");
const messages = new Messages();
const messagesProxy = new MessagesProxy(messages, user);

user.login();
messagesProxy.sendMessage("Hola");
console.log(messagesProxy.getHistory());
