const express = require("express");

const app = express();

const port = 8080;

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);

const serverHTML = (req, res, next) => {
  res.send("<h1>Hello World</h1>");
};

const serverAbout = (req, res, next) => {
  res.send("<h1>My name is Isaiah, and this is a simple server application!</h1>");
};

const peopleList = (req, res, next) => {
  const data = [
    { firstName: "Isaiah", lastName: "Hickerson" },
    { firstName: "Gonzalo", lastName: "Romero" },
    { firstName: "Alyse", lastName: "Amato" },
  ];
  res.send(data);
};

const dob = (req, res, next) => {
  const data = [
    { birthDate: "July 7" },
    { birthDate: "April 29" },
    { birthDate: "March 15" },
    { birthDate: "January 1" },
  ];
  res.send(data);
};

const serverDismiss = (req, res, next) => {
  const name = req.query.name || "random guy";
  res.send(`Bye ${name}`);
}

app.get("/", serverHTML);
app.get("/people", peopleList);
app.get("/birthdates", dob);
app.get("/dismiss", serverDismiss)
app.get("/about", serverAbout)
