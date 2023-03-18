const express = require('express');
const bodyParser = require('body-parser');

dP= require('./routes/ userRoutes')
const app = express();
const port = 4200;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://arshad:arshad@cluster0.gfiw0ul.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.get(dP, (req, res) => {
    const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
    res.json(users);
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  // Save user to database
  res.json({ message: 'User created successfully' });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
