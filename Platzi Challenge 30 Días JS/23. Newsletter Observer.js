class Subscriber {
  constructor(email) {
    this.email = email;
  }
  receive(article) {
    console.log(
      `El suscriptor ${this.email} ha recibido el artículo: '${article.title}'`
    );
  }
}

class Newsletter {
  constructor() {
    this.subscribers = [];
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(email) {
    const index = this.subscribers.indexOf(email);
    this.subscribers.splice(index, 1);
  }
  post(article) {
    this.subscribers.map((subscriber) => subscriber.receive(article));
  }
}

const newsletter = new Newsletter();
const subscriber1 = new Subscriber("pepe@mail.com");
const subscriber2 = new Subscriber("juanito@mail.com");
const subscriber3 = new Subscriber("pedro@mail.com");
const article = {
  title: "30 días de js",
  content: "Aprende js en 30 días",
};
newsletter.subscribe(subscriber1);
newsletter.subscribe(subscriber2);
newsletter.subscribe(subscriber3);

newsletter.post(article);
