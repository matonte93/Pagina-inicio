const express = require('express')
const app = express()
const port = 3000


app.use(cors()); // Permite que el servidor pueda recibir peticiones desde diferentes dominios
app.use(express.json()); // Permite que los parámetros de las peticiones sean recibidos como JSON
app.use(express.urlencoded({ extended: false })); // Permite interpretar los datos recibidos en el cuerpo de las peticiones

app.use(express.static('backend'));


app.get("/prueba", (req, res) => {
  // res.send('Hola Mundoss')
  res.json(prueba);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})