const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const config = require('config');
const ControllerV1 = require('./src/controller/v1');

const app = express();
const PORT = config.get('port') || 5660

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/',ControllerV1)

mongoose.connect(config.get('mongo.atlas.url'),{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connect to Mongo Atlas')
}).catch(err=>[
    console.error('Error connecting to Mongo Atlas', err),
]);

let server = null;
server = http.createServer(app).listen(PORT);
server.on('listening', ()=>{
    console.log('Server listening on port '+PORT);
});


