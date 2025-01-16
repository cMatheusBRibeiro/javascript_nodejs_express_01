import express from "express";
import bookRouter from "./book/bookRouter.js";

const routes = (app) => {
  app.route("/").get((_, res) => res.status(200).send("Hello World"));
  app.use(express.json(), bookRouter);
};

export default routes;
