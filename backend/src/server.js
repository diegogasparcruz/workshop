

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

const uri = 'mongodb+srv://cursonodejs:admin@cluster0-xn9e6.mongodb.net/workshop?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors());
app.use(routes);

const port = 3333;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})

