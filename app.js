const express = require('express')
const cors = require("cors");
const app = express()
const PORT= 3000


app.use(cors()); // Permite que el servidor pueda recibir peticiones desde diferentes dominios
app.use(express.json()); // Permite que los parámetros de las peticiones sean recibidos como JSON
app.use(express.urlencoded({ extended: false })); // Permite interpretar los datos recibidos en el cuerpo de las peticiones


app.get("/check", (req, res) => {
  res.send('Working....');
  
});


//Json Categorias
app.get("/category", (req, res) => {

  res.sendFile(__dirname + "/backend/category/all.json");
});

app.get("/category-info", (req, res) => {

  res.sendFile(__dirname + "/backend/category/1234.json");
});


//Json Productos 
app.get("/products", (req, res) => {

  res.sendFile(__dirname + "/backend/product/all.json");
});

app.get("/product-info", (req, res) => {

  res.sendFile(__dirname + "/backend/product/5678.json");
});

app.get("/product-comments", (req, res) => {

  res.sendFile(__dirname + "/backend/product/5678-comments.json");
});

app.get("/product-publish", (req, res) => {

  res.sendFile(__dirname + "/backend/product/publish.json");
});


//Json Carrito
app.get("/cart-info", (req, res) => {

  res.sendFile(__dirname + "/backend/cart/987.json");
});

app.get("/cart-buy", (req, res) => {

  res.sendFile(__dirname + "/backend/cart/buy.json");
});

app.get("/cart-info2", (req, res) => {

  res.sendFile(__dirname + "/backend/cart/654.json");
});


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});

