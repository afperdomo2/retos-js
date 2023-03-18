class Car {
  constructor(brand, model, year, mileage, state = false) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.state = state;
  }

  drive(km) {
    if (!this.state) {
      throw new Error("El auto está apagado");
    }
    this.mileage += km;
  }

  turnOn() {
    this.state = true;
  }

  turnOff() {
    this.state = false;
  }
}

const toyota = new Car("Toyota", "Corolla", 2020, 0);
toyota.turnOn();
toyota.drive(100);
console.log(toyota.mileage);
