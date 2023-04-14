const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const ControllerV1 = require('./src/controller/v1');

const app = express();
const PORT = 5660

app.use(cors());``
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/',ControllerV1)

mongoose.connect('mongodb+srv://credit_tail:zs3bbyEt8SsbDjFT@cluster0.tykh8jq.mongodb.net/credit-tail-db?retryWrites=true&w=majority',{
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


