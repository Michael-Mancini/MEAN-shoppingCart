var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();

const crud = require('./routes/cruds');

//connect to mongo
mongoose.connect('mongodb://localhost:27017/edurekamean');

//handle stuff
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected at port 27017');
});
mongoose.connection.on('error', (err) => {
    console.log(err);
});

//cors middleware
app.use(cors());
//body-parser middleware
app.use(bodyparser.json());

app.use('/api', crud);

app.get('/', (req, res) => {
    res.send('hehehe');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server has been started at port: '+PORT);
});