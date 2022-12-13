import express from "express";
import bodyParser from "body-parser";
import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
  port: 3306,
  connectionLimit: 5,
});

const app = express();

app.use(bodyParser.json());

app.use("/", express.static("public"));

app.get("/account", async (req, res) => {
  const conn = await pool.getConnection;
  const account = await conn.query(
    "SELECT pseudo, email, password FROM Account"
  );
  res.json(account);
  conn.close();
});

app.get("/create", async (req, res) => {
  const conn = await pool.getConnection;
  const quizz = await conn.query("SELECT name, description, pseudo FROM Quizz");
  res.json(quizz);
  conn.close();
});

app.post("/account", async (req, res) => {
  const acount = req.body;
  const conn = await pool.getConnection;
  const queryResult = await conn.query(
    `INSERT INTO Account (pseudo, email, password), value (?, ?, ?)`[
      (account.pseudo, account.email, account.password)
    ]
  );
  console.log(queryResult);
  res.end;
  conn.close();
});

app.post("/create", async (req, res) => {
  const quizz = req.body;
  const conn = await pool.getConnection;
  const queryResult = await conn.query(
    `INSERT INTO Quizz (name, description, pseudo), value (?, ?, ?)`[
      (quizz.name, quizz.description, quizz.pseudo)
    ]
  );
  console.log(queryResult);
  res.end;
  conn.close();
});

app.put("/account", (req, res) => {
  const account = req.body;
  const index = accounts.findIndex((p) => p.email === account.email);
  if (index != -1) {
    accounts[index] = account;
  } else {
    res.status(400);
  }
  res.end();
});

app.put("/create", (req, res) => {
  const quizz = req.body;
  const index = quizzs.findIndex((p) => p.name === quizz.name);
  if (index != -1) {
    quizzs[index] = quizz;
  } else {
    res.status(400);
  }
  res.end();
});

app.delete("/account/:email", (req, res) => {
  const email = req.params.email;
  const index = accounts.findIndex((p) => p.email === email);
  if (index != -1) {
    accounts.splice(index, 1);
  } else {
    res.status(400);
  }
  res.end();
});

app.delete("/create/:name", (req, res) => {
  const name = req.params.name;
  const index = quizzs.findIndex((p) => p.name === name);
  if (index != -1) {
    quizzs.splice(index, 1);
  } else {
    res.status(400);
  }
  res.end();
});

app.listen(3000);
