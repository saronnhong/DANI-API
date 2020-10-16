const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
require('dotenv/config');

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
const profilesRoute = require('./routes/profiles');

app.use('/posts', postsRoute);
app.use('/profiles', profilesRoute);

//Routes
app.get('/', (req, res) => {
    res.send("You are on the root of our REST API. Nothing happens... yet.");
})

//Connect to database
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('Connected to DB')
)

//Start to listen to the server
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });