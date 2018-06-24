const express = require('express')
const mongoose = require ('mongoose');
const app = express()
const bodyParser = require('body-parser')
//router include
const wordCup_routers = require('./api/router/worldCup_router')

mongoose.connect('mongodb://localhost/express_mlab');
//database cannect
// mongoose.connect('mongodb://mlab_express:134679acb@ds217131.mlab.com:17131/express_mlab');  
var db = mongoose.connection;
    db.on('error', () => {
        console('connection error')
    });
    db.once('open', function() {
    console.log('we are connection')
    }); 

//middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/api/wordCup', wordCup_routers)

app.get('/', (req, res) => res.send('Hello Wffforld!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))