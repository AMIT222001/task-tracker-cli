


# Task Manager CLI Application

A simple **Task Manager CLI** built with **Node.js**, **Commander.js**, and **Axios** that allows you to **create, read, update, and delete tasks** via a backend API or directly from the command line.

---

## Features

- List all tasks  
- Get a task by ID  
- Add a new task  
- Update a task (title or status)  
- Delete a task  
- Fully functional via CLI  
- Connects to a Node.js backend API  

---

## Tech Stack

- Node.js (v18+ recommended)  
- Express.js (backend API)  
- Commander.js (CLI)  
- Axios (HTTP requests)  
- JSON file for data storage (`task.json`)  

---

## Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd <repository-folder>
````

2. **Install dependencies**

```bash
npm install
```

3. **Ensure Node.js version is 18+**

```bash
node -v
```

4. **Start the backend server**

```bash
npm start
```

Your API will run on `http://localhost:3000/tasks`.

---

## Running CLI Using NPX

You can run the CLI directly without installing it globally:

```bash
npx task <command> [options]
```

---

## Available CLI Commands

| Command                        | Description                         |
| ------------------------------ | ----------------------------------- |
| `list`                         | List all tasks                      |
| `get <id>`                     | Get a task by its ID                |
| `add `                  | Add a new task with the given title |
| `update <id>  [status]` | Update a task's title or status     |
| `delete <id>`                  | Delete a task by ID                 |

---

### Examples

```bash
npx task list
npx task add 
npx task get 1694388775123
npx task update 1694388775123  done
npx task delete 1694388775123
```

---

## Folder Structure

```
task-manager/
├─ src/
│  ├─ controllers/
│  │  └─ taskController.js
│  ├─ routes/
│  │  └─ taskRoutes.js
│  └─ index.js          # Express server
├─ cli.js               # CLI commands
├─ package.json
└─ task.json            # JSON data storage
```

---

## Notes

* Make sure the **backend server is running** before using CLI commands that hit the API.
* JSON file (`task.json`) is used to store tasks; do not delete it unless you want to reset tasks.
* Node.js **v18+** is recommended for ES module support (`import/export`).
* You can run the CLI using `npx task` without global installation.
* if you want you can install cli.js to global than you can use command anywhere on your pc 

