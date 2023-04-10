class Product {
  // Este código no debe ser editado
  constructor(price) {
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
  getDescription() {
    throw new Error("Este método debe ser implementado en las subclases");
  }
}

class ShippingInsuranceDecorator extends Product {
  constructor(product) {
    super();
    this.product = product;
  }
  getPrice() {
    return this.product.getPrice() + 20;
  }
  getDescription() {
    return this.product.getDescription() + " con seguro de envío";
  }
}

class WarrantyDecorator extends Product {
  constructor(product) {
    super();
    this.product = product;
  }
  getPrice() {
    return this.product.getPrice() + 20;
  }
  getDescription() {
    return this.product.getDescription() + " con garantía";
  }
}

class BasicProduct extends Product {
  constructor(price, description) {
    super(price);
    this.description = description;
  }
  getDescription() {
    return this.description;
  }
}

const basicProduct = new BasicProduct(100, "Camisa de algodón");
const withWarranty = new WarrantyDecorator(basicProduct);
const withShippingInsurance = new ShippingInsuranceDecorator(withWarranty);

console.log(withShippingInsurance.getPrice());
console.log(withShippingInsurance.getDescription());
