const express = require('express');
const bodyParser = require('body-parser');

dP= require('./routes/ userRoutes')
const app = express();
const port = 4200;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get(dP, (req, res) => {
  res.send('Hello World first!');
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  // Save user to database
  res.json({ message: 'User created successfully' });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
