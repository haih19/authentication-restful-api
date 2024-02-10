import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";

config();

const port = process.env.PORT || 8080;
const mongoUrl = process.env.MONGO_URL || "";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("hello");
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

mongoose.Promise = Promise;
mongoose.connect(mongoUrl);
mongoose.connection.on("error", (error: Error) => console.log(error));
