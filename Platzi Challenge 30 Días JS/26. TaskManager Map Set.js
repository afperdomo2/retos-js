function taskManager() {
  const tasks = new Map();

  const addTask = (task, tags) => {
    const taskMinus = task.toLowerCase();

    if (!tasks.has(taskMinus)) {
      tasks.set(taskMinus, new Set(tags));
    } else {
      const setTags = tasks.get(taskMinus);
      tags.map((tag) => setTags.add(tag));
      tasks.set(taskMinus, setTags);
    }
  };

  const printTasks = () => {
    return tasks;
  };

  return { addTask, printTasks };
}

const myTaskManager = taskManager();

myTaskManager.addTask("Comprar leche", ["compras", "urgente"]);
myTaskManager.addTask("Sacar al perro", ["mascotas"]);
myTaskManager.addTask("Hacer ejercicio", ["salud"]);
myTaskManager.addTask("Comprar leche", ["lácteos22", "pruebas"]);

console.log(myTaskManager.printTasks());
