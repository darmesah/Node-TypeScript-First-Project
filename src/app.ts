import express from "express";

import todoRoutes from "./routes/todos";

import error404 from "./middleware/404";
import errorHandler from "./middleware/errorHandler";

const app = express();

app.use(express.json());

app.use("/api/todos", todoRoutes);

app.use(error404);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
