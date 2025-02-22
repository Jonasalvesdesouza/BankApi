import express from "express";
import helmet from "helmet";
import { json } from "stream/consumers";

const app = express();

app.use(helmet());
app.use(express.json());

export { app };
