import express from 'express';

const app = express ();
const port = 4004;

app.post ('/hello', (request, response) => {
  response.send ('Hello world!');
});


app.listen (port, () => {
  console.log (`Web server running on port ${port}`);
});
