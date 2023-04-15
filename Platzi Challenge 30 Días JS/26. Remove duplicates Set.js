function removeDuplicates(values) {
  return [...new Set(values)];
}

const fruits = [
  "melon",
  "melon",
  "mango",
  "banana",
  "apple",
  "banana",
  "apple",
];

console.log(removeDuplicates(fruits));
