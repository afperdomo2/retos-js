function protectDog(dog) {
  const copy = Object.assign({}, dog);
  const propertiesToProtect = ["owner", "favoriteFood", "activities"];

  const freezeRecursively = (obj) => {
    Object.freeze(obj);
    for (const prop in Object.getOwnPropertyNames(obj)) {
      if (propertiesToProtect.includes(prop) && typeof obj[prop] === "object") {
        freezeRecursively(obj[prop]);
      }
    }
  };

  freezeRecursively(copy);
  return copy;
}

let perro = protectDog({
  name: "Romeo",
  age: 3,
  owner: { name: "Victor", phoneNumber: "555-555-5555" },
  favoriteFood: ["pollito", "croquetas"],
  activities: ["jugar", "caminar"],
});

perro.name = "Toro";
console.log(perro.name);
