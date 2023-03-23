const express = require('express');
const bodyParser = require('body-parser');

const dP= require('./routes/ userRoutes')
const app = express();
const port = 4200;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/post",dP );


const { MongoClient, ServerApiVersion } = require('mongodb');
const ChannelModulea = require('./routes/ userRoutes');
const { default: mongoose } = require('mongoose');

mongoose.connect( 'mongodb+srv://arshad:arshad@cluster0.gfiw0ul.mongodb.net/Admindata')
  
mongoose.connection.on("error",(err)=> {
  console.log("connection faild");
})
mongoose.connection.on("conneced",(conneced)=> {

  console.log("db connected",conneced);
})

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  // Save user to database
  res.json({ message: 'User created successfully' });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
