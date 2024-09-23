import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import getPresentations from "./routes/get-presentations";
import getPresentation from "./routes/get-presentation";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(getPresentations);
app.use(getPresentation);

app.listen(process.env.PORT, () => {
  console.log(`HTTPS Server is running on port ${process.env.PORT}`);
});

