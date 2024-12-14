import express from "express";
import notesRouter from "./controllers/notes";
import personsRouter from "./controllers/persons";
import cors from "cors";
import middleware from "./utils/middlewares";

const app = express();

app.use(cors());
app.use(express.static("dist"));
app.use(middleware.requestLogger);
app.use(express.json());
app.use("/api/notes", notesRouter);
app.use("/api/persons", personsRouter);
app.use(middleware.unknownEndpoint);

export default app;
