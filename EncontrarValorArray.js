function searchValue(array, value) {
  if (!array.flat(1).includes(value)) {
    throw new Error("Valor no encontrado");
  }

  const row = array.findIndex((rows) => rows.includes(value));
  const column = array[row].findIndex((col) => col === value);

  return {
    row: row,
    column: column,
  };
}

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.table(array);
const value = 8;
console.log(`search: ${value}`);

console.log(searchValue(array, value));
