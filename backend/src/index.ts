import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log('new query ' + JSON.stringify(req));
  res.send('Hello, Docker !');
});

app.listen(3000, () => {
  console.log('Serveur en écoute sur le port 3000');
});