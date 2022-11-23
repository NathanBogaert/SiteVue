import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use("/", express.static("public"));

app.listen(3000);
