/**
 * Esta función recibirá un array de objetos que representan
 * productos, y devolverá una copia ordenada de dicho array.
 *
 * El ordenamiento se realizará siguiendo dos criterios:
 *
 * - Primero, los productos disponibles en inventario serán
 * colocados al principio de la lista.
 * - Luego, los productos serán ordenados por su precio, de
 * manera ascendente.
 *
 * Es importante destacar que la lista original no sufrirá
 * ninguna modificación, y que la función devolverá una nueva
 * lista con los cambios mencionados.
 */
function sortByAvailabilityAndPrice(products) {
  const newList = [...products].sort((a, b) => {
    if (a.inStock === b.inStock) {
      return a.price > b.price ? 1 : -1;
    } else {
      return b.inStock - a.inStock;
    }
  });
  console.log(newList);
  return newList;
}

const products = [
  { name: "product1", price: 10, inStock: true },
  { name: "product2", price: 20, inStock: false },
  { name: "product3", price: 15, inStock: true },
  { name: "product4", price: 5, inStock: false },
];

sortByAvailabilityAndPrice(products);
