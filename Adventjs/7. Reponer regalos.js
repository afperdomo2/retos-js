/**
 * En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes
 * (que se representa cada uno como un Array). En cada almacén hay regalos.
 *
 * Nos han pedido que escribamos un programa que nos diga qué regalos hay que
 * comprar para reponer en nuestros almacenes ahora que se acerca la Navidad.
 * Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres
 * almacenes.
 */
function getGiftsToRefill(a1, a2, a3) {
  const allGifts = [];
  [...a1, ...a2, ...a3].map((gif) => {
    !allGifts.includes(gif) && allGifts.push(gif);
  });

  const giftsToRefill = [];
  allGifts.map((gif) => {
    let count = 0;
    a1.includes(gif) && count++;
    a2.includes(gif) && count++;
    a3.includes(gif) && count++;
    count === 1 && giftsToRefill.push(gif);
  });

  return giftsToRefill;
}

const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

const gifts = getGiftsToRefill(a1, a2, a3);
console.log("gifts:", gifts);
