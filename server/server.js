const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const phonesRouter = require("./phones/phones.route");

dotenv.config();

const PORT = process.env.PORT || 8000;
const { DB_PASSWORD, DB_NAME } = process.env;
const MONGO_URL = `mongodb+srv://petyhov:${DB_PASSWORD}@cluster0.zh685.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

start();

function start() {
  initServer();
  initMiddlewares();
  initRoutes();
  connectDatabase();
  listen();
}

function initServer() {
  server = express();
}

function initMiddlewares() {
  server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });

  server.use(express.json());
  server.use(express.static("public"));
  server.use(cors());
  server.use(morgan("dev"));
}

function initRoutes() {
  server.use("/phones", phonesRouter);
}

async function connectDatabase() {
  await mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(
      () => {
        console.log("Database connection successful");
      },
      (err) => {
        console.log(err);
        process.exit(1);
      }
    );
}

function listen() {
  server.listen(PORT, () => {
    console.log("Server is listening on port: ", PORT);
  });
}
