class Flight {
  passengers = [];

  constructor(origin, destination, date, capacity, price) {
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.capacity = capacity;
    this.price = price;
  }

  sellTicket(passenger) {
    if (this.hasCapacity()) {
      this.addPassenger(passenger.getPassenger());
      passenger.addFlight(this.flight);

      return new Reservation(this.flight, passenger);
    }
  }

  hasCapacity() {
    return this.capacity > 0 ? true : false;
  }

  addPassenger(passenger) {
    this.passengers.push(passenger);
    this.capacity--;
  }

  getPrice() {
    return this.price;
  }

  addValueToPrice(value) {
    this.price = this.price + value;
  }

  get flight() {
    return {
      origin: this.origin,
      destination: this.destination,
      date: this.date,
      price: this.price,
    };
  }

  get passengers() {
    return this.passengers;
  }
}

class EconomicFlight extends Flight {
  constructor(origin, destination, date, capacity, price) {
    super(origin, destination, date, capacity, price);
  }

  sellTicket(passenger) {
    if (super.hasCapacity()) {
      const { age } = passenger.getPassenger();
      const discount = age < 18 || age > 65 ? this.makeDiscount() : 0;
      discount > 0 && super.addValueToPrice(discount * -1);

      super.addPassenger(passenger.getPassenger());
      passenger.addFlight(super.flight);

      return new Reservation(super.flight, passenger);
    }
  }

  makeDiscount() {
    return super.getPrice() * 0.2;
  }
}

class PremiumFlight extends Flight {
  constructor(origin, destination, date, capacity, price, specialService) {
    super(origin, destination, date, capacity, price);
    this.specialService = specialService;
  }

  sellTicket(passenger) {
    if (super.hasCapacity()) {
      super.addValueToPrice(this.specialService);

      super.addPassenger(passenger.getPassenger());
      passenger.addFlight(super.flight);

      return new Reservation(super.flight, passenger);
    }
  }
}

class Passenger {
  flights = [];

  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  addFlight(flight) {
    this.flights.push(flight);
  }

  get flights() {
    return this.flights;
  }

  getPassenger() {
    return {
      fullName: this.name + " " + this.lastName,
      age: this.age,
    };
  }
}

class Reservation {
  constructor(flight, passenger) {
    this.flight = flight;
    this.passenger = passenger;
  }

  reservationDetails() {
    const passengerName = this.passenger.name + " " + this.passenger.lastName;
    return {
      origin: this.flight.origin,
      destination: this.flight.destination,
      date: this.flight.date,
      reservedBy: passengerName,
    };
  }
}

const flight = new EconomicFlight("New York", "Paris", "2023-12-25", 100, 200);

const passenger = new Passenger("Pedro", "Gutierrez", 17);

const reservation = flight.sellTicket(passenger);

console.log(reservation.flight.price);
