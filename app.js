const express = require('express')
const app = express()
const port = 3000

const prueba = ["hola","hola2, hola3"];


app.use(express.static(__dirname + '/backend'));

app.get("/prueba", (req, res) => {
  // res.send('Hola Mundoss')
  res.json(prueba);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})