import dotenv from "dotenv";
import express from "express";
import presentations from "./routes/get-presentations";

dotenv.config();

const app = express();
app.use(express.json());

app.use(presentations);

app.listen(process.env.PORT);
