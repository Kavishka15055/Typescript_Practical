"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enum for task status
var Status;
(function (Status) {
    Status["Pending"] = "pending";
    Status["InProgress"] = "in-progress";
    Status["Completed"] = "completed";
})(Status || (Status = {}));
const tasks = [];
// Function to create a new task
function createTask(id, title, description, status = Status.Pending, dueDate) {
    return {
        id,
        title,
        description,
        status,
        // TypeScript strict mode: dueDate is Date | undefined explicitly
        dueDate
    };
}
// Function to update task status
function updateTaskStatus(task, newStatus) {
    return { ...task, status: newStatus };
}
// Generic function to find tasks by any field
function findTaskBy(tasks, key, value) {
    return tasks.filter(task => task[key] === value);
}
// Create tasks
const task1 = createTask(1, "Write summary", "Finish the course summary section");
const task2 = createTask(2, "Refactor code", "Improve TypeScript generics example", Status.InProgress);
tasks.push(task1, task2);
// Update task
const updatedTask = updateTaskStatus(task1, Status.Completed);
// Find tasks by status
const pendingTasks = findTaskBy(tasks, "status", Status.Pending);
console.log("Updated Task:", updatedTask);
console.log("Pending Tasks:", pendingTasks);
//# sourceMappingURL=main6.js.map