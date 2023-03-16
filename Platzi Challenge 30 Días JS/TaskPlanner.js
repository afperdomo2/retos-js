function createTaskPlanner() {
    let tasks = [];
    return {
        addTask (task) {
            tasks.push({
                ...task,
                completed: false,
            });
        },

        removeTask (value) {
            const id = typeof value === "number"
                ? tasks.findIndex(({id}) => id === value)
                : tasks.findIndex(({name}) => name === value);
            tasks.splice(id, 1);
        },
        getTasks () {
            return tasks;
        },
        getPendingTasks () {
            return tasks.filter(({completed}) => completed === false);
        },
        getCompletedTasks () {
            return tasks.filter(({completed}) => completed === true);
        },
        markTaskAsCompleted (value) {
            const id = typeof value === "number"
                ? tasks.findIndex(({id}) => id === value)
                : tasks.findIndex(({name}) => name === value);

            tasks[id].completed = true;
        },
        getSortedTasksByPriority () {
            return tasks.sort((a, b) => a.priority - b.priority);
        },
        updateTask(taskId, updates) {
            const index = tasks.findIndex((item) => item.id === taskId);
            tasks[index] = { ...tasks[index], ...updates };
        },
        filterTasksByTag (tag) {
            return tasks.filter((task) => task.tags.includes(tag));
        },
    }
}

const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});
planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 5,
    tags: ["personal"]
});
planner.addTask({
    id: 3,
    name: "hacer aseo",
    priority: 3,
    tags: ["personal"]
});

planner.updateTask(3, {
    id: 3,
    name: "hacer aseo 222",
    priority: 5,
    tags: ["home"],
    completed: true,
});

console.log(
    planner.getTasks()
)
