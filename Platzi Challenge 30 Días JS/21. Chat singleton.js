class User {
  constructor(name) {
    this.name = name;
    this.messages = [];
  }

  receiveMessage(message) {
    this.messages.push(message);
  }
}

class Chat {
  users = [];

  constructor() {
    if (!Chat.instance) {
      Chat.instance = Object.freeze(this);
    }
    return Chat.instance;
  }

  sendMessage(message) {
    this.users.map((user) => user.receiveMessage(message));
  }

  addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
    }
  }

  removeUser(name) {
    const index = this.users.findIndex((u) => u.name === name);
    this.users.splice(index, 1);
  }
}

const chat = new Chat();
const user1 = new User("Pepito");
const user2 = new User("Juanito");
chat.addUser(user1);
chat.addUser(user2);

chat.sendMessage("Nunca pares de aprender!");

console.log(user1.messages);
console.log(user2.messages);
