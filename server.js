const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();

const Quagga = require('quagga').default;

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/src/index.html`)
})

app.listen(3000, () => {
  console.log("Sunucu 3000 Portunda çalıştırılıyor");
})
