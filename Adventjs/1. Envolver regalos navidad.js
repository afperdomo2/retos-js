/**
 * Este año los elfos han comprado una máquina que envuelve regalos.Pero… ¡no
 * viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.
 *
 * A la máquina se le pasa un array con los regalos. Cada regalo es un string.
 * Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo
 * coloque en un array de regalos envueltos.
 *
 * El papel de regalo es el símbolo * y para envolver un regalo se coloca el
 * símbolo * de forma que rodee totalmente al string por todos los lados.
 *
 * Nota: El carácter \n representa un salto de línea.
 * 
 * ¡Ojo! Asegúrate que pones el número correcto de * para envolver completamente
 * el string. Pero no demasiados. Sólo los necesarios para cubrir el string.
 *
 * Ah, y no modifiques (mutes) el array original.
 * 
 * @param {array} gifts Listado de regalos
 * @returns {array}
 */
function wrapping(gifts) {
  return gifts.map((gif) => {
    const asterisks = "*".repeat(gif.length + 2);
    return `${asterisks}\n*${gif}*\n${asterisks}`;
  });
}

const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);

console.log(wrapped);

// Resultado esperado:

/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
