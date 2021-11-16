const express = require('express')
const app = express()
const port = 3000

const prueba = ["hola","hola2, hola3"];

const json = "/prueba";

app.get(json, (req, res) => {
  // res.send('Hola Mundoss')
  res.json(prueba);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})