import fs, { stat } from "fs";
const TASK_FILE = "task.json";

// Helper functions
const readTasksFromFile = () => {
  if (!fs.existsSync(TASK_FILE)) return [];
  try {
    const data = fs.readFileSync(TASK_FILE, "utf-8"); // sync read
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading tasks:", err);
    return [];
  }
};

const writeTasksToFile = (tasks) => {
  try {
    fs.writeFileSync(TASK_FILE, JSON.stringify(tasks, null, 2));
  } catch (err) {
    console.error("Error writing tasks:", err);
  }
};

// Controller functions

// Get all tasks
export const getTasks = (req, res) => {
  const tasks = readTasksFromFile();
  if (res) return res.json(tasks);
  return tasks;
};

// Get a single task by ID
export const getTask = (req, res) => {
  const tasks = readTasksFromFile();
  const id = req.params?.id || req.id;
  const task = tasks.find((t) => t.id == id);
  if (!task) {
    if (res) return res.status(404).json({ error: "Task not found" });
    return null;
  }
  if (res) return res.json(task);
  return task;
};

// Create a new task
export const createTask = (req, res) => {
  const tasks = readTasksFromFile();
  const newTask = {
    id: Date.now(),
    title: req.body?.title || req.title,
    status: "not done",
  };
  tasks.push(newTask);
  writeTasksToFile(tasks);
  if (res) return res.status(201).json(newTask);
  return newTask;
};

// Update a task
export const updateTask = (req, res) => {
  const tasks = readTasksFromFile();
  const id = req.params.id
  console.log(tasks);
  const {status} = req.body;
  console.log(status)

  const index = tasks.findIndex((t) => t.id == id);
  console.log(index);
  if (index === -1) {
    if (res) return res.status(404).json({ error: "Task not found" });
    return null;
  }
  let a=tasks[index];
  a["status"]=status;
tasks[index]=a;
fs.writeFileSync(TASK_FILE, JSON.stringify(tasks, null, 2));
  res.send(tasks[index]) 
};

// Delete a task
export const deleteTask = (req, res) => {
  let tasks = readTasksFromFile();
  const id = req.params?.id || req.id;

  const task = tasks.find((t) => t.id == id);
  if (!task) {
    if (res) return res.status(404).json({ error: "Task not found" });
    return null;
  }

  tasks = tasks.filter((t) => t.id != id);
  writeTasksToFile(tasks);
  if (res) return res.json({ message: "Task deleted", task });
  return task;
};

// For testing in CLI
if (process.argv[2] === "test") {
  console.log("All tasks:", getTasks());
}
