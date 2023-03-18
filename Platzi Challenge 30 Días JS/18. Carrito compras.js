class Product {
  // No debes editar este archivo ❌
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  addToCart() {
    throw new Error(
      "La lógica de este método debe ser implementada por las clases hijas"
    );
  }
}

class Article extends Product {
  constructor(name, price, quantity) {
    super(name, price, quantity);
  }

  addToCart() {
    return `Agregando ${this.quantity} unidades del artículo ${this.name} al carrito`;
  }
}

class Service extends Product {
  constructor(name, price, quantity) {
    super(name, price, quantity);
  }

  addToCart() {
    return `Agregando el servicio ${this.name} al carrito`;
  }
}

class Cart {
  products = [];

  addProduct(product) {
    this.products.push(product);
  }

  deleteProduct(product) {
    const index = this.products.findIndex(({ name }) => name === product.name);
    this.products.splice(index, 1);
  }

  calculateTotal() {
    const total = this.products.reduce((total, { price, quantity }) => {
      return total + price * quantity;
    }, 0);
    return total;
  }

  getProducts() {
    return this.products;
  }
}

const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120, 1);

const cart = new Cart();
cart.addProduct(book);
cart.addProduct(course);
//cart.deleteProduct(book);
console.log("Total:", cart.calculateTotal());
console.table(cart.getProducts());
