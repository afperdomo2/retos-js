class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  map(func) {
    const maps = new MyArray();
    for (let item in this.data) {
      maps.push(func(this.data[item]));
    }
    return maps;
  }

  filter(func) {
    const filters = new MyArray();
    for (let item in this.data) {
      if (func(this.data[item])) {
        filters.push(this.data[item]);
      }
    }
    return filters;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const index = this.length - 1;
    const dataDeleted = this.data[index];
    delete this.data[index];

    this.length--;

    return dataDeleted;
  }

  join(character = ",") {
    let text = "";
    Object.values(this.data).map((data, index) => {
      text += data + (index === this.length - 1 ? "" : character);
    });
    return text;
  }

  shift() {
    const dataDeleted = this.data[0];
    delete this.data[0];

    const newData = {};
    Object.values(this.data).map((data, index) => {
      newData[index] = data;
    });

    this.data = newData;
    this.length--;

    return dataDeleted;
  }

  unshift(item) {
    if (!item && item !== 0) {
      return this.length;
    }
    const newData = { 0: item };

    Object.values(this.data).map((data, index) => {
      newData[index + 1] = data;
    });

    this.data = newData;
    this.length++;
    return this.length;
  }
}

const myArray = new MyArray();

myArray.push("Platzinauta");
myArray.push("Platzinauta222");
myArray.push("Platzi");
myArray.push("pruebas");

console.log("length:", myArray.length);

console.log("unshift:", myArray.unshift("Hola!"));

console.log("data:", myArray.data);
console.log("length:", myArray.length);

console.log("deleted:", myArray.shift());

console.log("data:", myArray.data);
console.log("data:", myArray.length);

// console.log("join:", myArray.join());

// const double = myArray.map((data) => {
//   return data + "-hola";
// });
// console.log("data:", double);
