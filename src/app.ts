import express, { Express } from "express";
import dotenv from "dotenv";
import todoRoute from "@api/routes/todo.route";
import { errorHandler } from "@api/middlewares/errorHandler.middleware";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("api/v1/todos", todoRoute);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
