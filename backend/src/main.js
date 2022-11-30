import express from "express";
import bodyParser from "body-parser";
import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "localhost",
  user: "myUser",
  password: "myPassword",
  database: "myDatabase",
});

const app = express();

app.use(bodyParser.json());

app.use("/", express.static("public"));

app.listen(3000);
