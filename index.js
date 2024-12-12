const express = require("express");

const app = express();
const PORT = 3000;
const CLIENT = require("./data/clients");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/api", (req, res) => {
  res.send("API page");
});

app.get("/api/user", (req, res) => {
  res.json(CLIENT.map(c => ({
    id: c.id,
    name: c.nombre,
    surname: c.apellidos,
    email: c.cuenta.email
    
  })));
});

app.get("/api/user/:id", (req, res) => {
  const id = req.params.id;
  const filterClient = CLIENT.filter(c => c.id === parseInt(id));

  if (filterClient.length === 0) {
    res.status(404).send("User not found");
  }

  res.json(filterClient);
  
  res.send(`User ID: ${id}`);
});