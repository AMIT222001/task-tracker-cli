#!/usr/bin/env node
import { Command } from "commander";
import axios from "axios";

const program = new Command();
const BASE_URL = "http://localhost:3000/tasks"; // your backend API

program.version("1.0.0").description("Task Manager CLI via API");

// List all tasks
program
  .command("list")
  .description("List all tasks")
  .action(async () => {
    try {
      const res = await axios.get(BASE_URL);
      console.log("Tasks:", res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err.message);
    }
  });

// Get task by ID
program
  .command("get <id>")
  .description("Get task by ID")
  .action(async (id) => {
    try {
      const res = await axios.get(`${BASE_URL}/${id}`);
      console.log(res.data);
    } catch (err) {
      console.error("Error fetching task:", err.response?.data?.error || err.message);
    }
  });

// Add a new task
program
  .command("add ")
  .description("Add a new task")
  .action(async (title) => {
    try {
      const res = await axios.post(BASE_URL,);
      console.log("Task added:", res.data);
    } catch (err) {
      console.error("Error adding task:", err.message);
    }
  });

// Update a task
program
  .command("update <id>  [status]")
  .description("Update a task")
  .action(async (id, status) => {
    try {
      const updates = {};
      
      if (status) updates.status = status;
     

      const res = await axios.put(`${BASE_URL}/${id}`, updates);
      console.log("Task updated:", res.data);
    } catch (err) {
      console.error("Error updating task:", err.response?.data?.error || err.message);
    }
  });

// Delete a task
program
  .command("delete <id>")
  .description("Delete a task")
  .action(async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/${id}`);
      console.log("Task deleted:", res.data);
    } catch (err) {
      console.error("Error deleting task:", err.response?.data?.error || err.message);
    }
  });

program.parse(process.argv);
