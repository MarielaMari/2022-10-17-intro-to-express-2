import express from 'express';

const app = express ();
const port = 4004;

app.listen (4004, () => {
  console.log (`Web server running on port ${port}`);
});
