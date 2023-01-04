// Use Hack2 as reference
import path from "path";

import express from "express";
import cors from "cors";
import routes from "./routes";
import mongoose from "mongoose";
import { dataInit } from "./upload";
require("dotenv").config();
const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(cors());
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "POST, GET, PUT, DELETE, OPTIONS"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });
}
// init middleware
// app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "../frontend", "build")));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });
}
const port = process.env.PORT || 4000;
const dboptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGO_URL, dboptions).then(async (res) => {
  if (process.env.MODE === "Reset") {
    console.log("Reset Mode: reset the data");
    dataInit();
  }
});

routes(app);
app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
