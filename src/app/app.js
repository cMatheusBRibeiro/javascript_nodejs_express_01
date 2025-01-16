import express from "express";
import { databaseConnect } from "../config/db/index.js";

await databaseConnect();

const app = express();

// middleware
app.use(express.json());

export default app;
