const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;


app.use(express.static(__dirname + '/dist/angular-front'));

app.get('/*', (req, res) => {
  res.send(__dirname + '/dist/angular-front/index.html')
});

app.listen(PORT, () => {
  console.log("Servidor iniciado na porta" + PORT);
})s
