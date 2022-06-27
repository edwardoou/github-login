import express from "express";
import cors from "cors";
import { auth } from "./components";

export const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", auth);
