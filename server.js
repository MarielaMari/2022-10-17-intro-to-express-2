import express from 'express';

const app = express ();
const port = 4004;

app.use (express.json ());

//This is normally stored in a database

let sandwiches = [
  {
    name: 'ham',
    breadType: 'rye',
    ingrediants: ['ham', 'mayo', 'mustard', 'pickles', 'tomato'],
  },
  {
    name: 'pb&j',
    breadType: 'sourdough',
    ingrediants: ['peanut butter', 'jam'],
  },
  {
    name: 'blt',
    breadType: 'white',
    ingrediants: ['beacon', 'lettuce', 'tomato'],
  },
];

//List all the sandwiches

app.get ('/sandwiches', (request, response) => {
  response.send (sandwiches);
});

//Create a new sandwich
app.post ('/sandwiches', (request, response) => {
  const sandwich = request.body;
  sandwiches.push (sandwich);
  response.send ();
});

//Delete sandwich
app.delete ('/sandwiches', (request, response) => {
  const sandwich = request.body;

  console.log (sandwich.name);

  const filteredSandwiches = sandwiches.filter (
    sandwich => sandwich.ingrediants.length <= 3
  );
  console.log ('Filtered:', filteredSandwiches);
  console.log ('Original:', sandwiches);

  response.send ();
});

app.listen (port, () => {
  console.log (`Web server running on port ${port}`);
});
