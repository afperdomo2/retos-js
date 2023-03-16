/**
 * Un millonario ha comprado una red social y no trae buenas noticias.
 * Ha anunciado que cada vez que una jornada de trabajo se pierde por
 * un día festivo, habrá que compensarlo con dos horas extra otro día
 * de ese mismo año.
 *
 * Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca
 * de gracia y están preparando un programa que les diga el número de
 * horas extras que harían en el año si se aplicara la nueva norma.
 *
 * Al ser trabajo de oficina, su horario laboral es de lunes a viernes.
 * Así que sólo tienes que preocuparte de los días festivos que caen en
 * esos días.
 *
 * @param {number} year
 * @param {array} holidays
 * @returns {number}
 */
function countHours(year, holidays) {
  let hours = 0;
  holidays.map((holiday) => {
    const numberDay = new Date(`${year}/${holiday}`).getDay();
    if (numberDay > 0 && numberDay < 6) {
      hours += 2;
    }
  });
  return hours;
}

/**
 * Dado un año y un array con las fechas de los días festivos,
 * devuelve el número de horas extra que se harían ese año:
 */
const year = 2023;
const holidays = ["01/06", "04/01", "12/25"];

console.log(countHours(year, holidays));
