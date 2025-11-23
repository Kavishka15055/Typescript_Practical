// Enum for task status
enum Status {
  Pending = "pending",
  InProgress = "in-progress",
  Completed = "completed"
}

// Task object with optional dueDate
// IMPORTANT: When `exactOptionalPropertyTypes` is true,
// optional properties MUST explicitly include `undefined`
type Task = {
  id: number;
  title: string;
  description: string;
  status: Status;
  dueDate?: Date | undefined;
};

const tasks: Task[] = [];

// Function to create a new task
function createTask(
  id: number,
  title: string,
  description: string,
  status: Status = Status.Pending,
  dueDate?: Date
): Task {
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
function updateTaskStatus(task: Task, newStatus: Status): Task {
  return { ...task, status: newStatus };
}

// Generic function to find tasks by any field
function findTaskBy<T extends keyof Task>(
  tasks: Task[],
  key: T,
  value: Task[T]
): Task[] {
  return tasks.filter(task => task[key] === value);
}

// Create tasks
const task1 = createTask(
  1,
  "Write summary",
  "Finish the course summary section"
);

const task2 = createTask(
  2,
  "Refactor code",
  "Improve TypeScript generics example",
  Status.InProgress
);

tasks.push(task1, task2);

// Update task
const updatedTask = updateTaskStatus(task1, Status.Completed);

// Find tasks by status
const pendingTasks = findTaskBy(tasks, "status", Status.Pending);

console.log("Updated Task:", updatedTask);
console.log("Pending Tasks:", pendingTasks);
