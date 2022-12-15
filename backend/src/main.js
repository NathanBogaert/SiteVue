import express from "express";
import bodyParser from "body-parser";
import mariadb from "mariadb";

//connect localhost
const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
  port: 3306,
  connectionLimit: 5,
});

//connect alwaysdata
/*const pool = mariadb.createPool({
  host: "quizz.alwaysdata.net",
  user: "quizz",
  password: "fullstack",
  database: "quizz_db",
  port: 3306,
  connectionLimit: 5,
});*/

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

app.get("/quizz", async (req, res) => {
  const conn = await pool.getConnection;
  const quizz = await conn.query("SELECT name, description FROM Quizz");
  res.json(quizz);
  conn.close();
});

app.get("/question", async (req, res) => {
  const conn = await pool.getConnection;
  const question = await conn.query(
    "SELECT question, response1, response2, response3, response4, trueResponse FROM Question"
  );
  res.json(question);
  conn.close();
});

app.post("/account", async (req, res) => {
  const account = req.body;
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
    `INSERT INTO Quizz (name, description), value (?, ?)`[
      (quizz.name, quizz.description)
    ]
  );
  console.log(queryResult);
  res.end;
  conn.close();
});

app.post("/question", async (req, res) => {
  const question = req.body;
  const conn = await pool.getConnection;
  const queryResult = await conn.query(
    `INSERT INTO Question (question, response1, response2, response3, response4, trueResponse), value (?, ?, ?, ?, ?, ?)`[
      (question.question,
      question.response1,
      question.response2,
      question.response3,
      question.response4,
      question.trueResponse)
    ]
  );
  console.log(queryResult);
  res.end;
  conn.close();
});

app.put("/account", (req, res) => {
  const account = req.body;
  const index = account.findIndex((p) => p.email === account.email);
  if (index != -1) {
    account[index] = account;
  } else {
    res.status(400);
  }
  res.end();
});

app.put("/create", (req, res) => {
  const quizz = req.body;
  const index = quizz.findIndex((p) => p.name === quizz.name);
  if (index != -1) {
    quizz[index] = quizz;
  } else {
    res.status(400);
  }
  res.end();
});

app.put("/question", (req, res) => {
  const question = req.body;
  const index = question.findIndex((p) => p.question === question.question);
  if (index != -1) {
    question[index] = question;
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

app.delete("/question/:question", (req, res) => {
  const question = req.params.question;
  const index = question.findIndex((p) => p.question === question);
  if (index != -1) {
    question.splice(index, 1);
  } else {
    res.status(400);
  }
  res.end();
});

app.listen(3000);
