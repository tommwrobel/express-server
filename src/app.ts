import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import userRoute from "@routes/user.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server test 2");
});

app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
