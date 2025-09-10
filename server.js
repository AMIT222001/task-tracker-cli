import express from "express";

import router from "./src/routes/taskRoutes.js"

const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/tasks", router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
