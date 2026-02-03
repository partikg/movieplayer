const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/uploads/movie', express.static('uploads/movie'));

require('./src/routes/user.routes')(server);
require('./src/routes/categoryRoutes')(server);
require('./src/routes/movieRoutes')(server);

server.get('/', (req, res) => {
    res.send("working");
});

mongoose.connect('mongodb://127.0.0.1:27017/practicemovie')
    .then(() => {
        server.listen(5000, () => console.log("Server running, DB Connected"));
    });