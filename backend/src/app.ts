import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dutyRoutes from "./routes/dutyRoutes";

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api", dutyRoutes);

export default app;
