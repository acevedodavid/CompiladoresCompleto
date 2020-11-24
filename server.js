const express = require('express');
const path = require('path');
const app = express();
const spawn = require('child_process').spawn;
const fs = require('fs');
const bodyParser = require('body-parser');

const server = require('http').createServer(app);

// Routing
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
//app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}));
//use bodyParser() to let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Server listen
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log('Server listening at port ' + port);
});

app.get('/favicon.ico', (req, res) => {
    // return favicon i guess
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/blockly.html', (req, res) => {
    res.render('blockly');
});

app.post('/compileCode', (req, res) => {
    //save code
    console.log("/saveCode")
    //console.log("saveCode");
    //console.log(req.body);
    //console.log(res.body);
    fs.writeFile("output_web.txt", req.body.code, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file output_web.txt was saved!")
    });
    
    // run main.py
    console.log("/runMain");
    var dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python3', ['compiler/main.py', 'output_web.txt']);

    // collect data from script
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        //console.log(dataToSend);
        fs.writeFile("output_main.txt", dataToSend, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file output_main.txt was saved!")
        });
    });

    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        //res.send(dataToSend)
    });
    
    console.log("Finish method, going out, bye bye");
});