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
const wordsRoute = require('./routes/words');
const analyticsRoute = require('./routes/analytics');
const settingsRoute = require('./routes/settings');


app.use('/posts', postsRoute);
app.use('/profiles', profilesRoute);
app.use('/words', wordsRoute);
app.use('/analytics', analyticsRoute);
app.use('/settings', settingsRoute);

//Routes
app.get('/', (req, res) => {
    res.send("Welcome to the REST API for Speechboard. Go to https://speechboard-api.herokuapp.com/profiles to view all user profiles.");
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