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
//app.use(bodyParser.text({ type: "text/plain" }));
//var jsonParser = bodyParser.json();

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

app.get('/result.html', (req, res) => {
    res.render('result');
});

app.get('/quadruples.html', (req, res) => {
    res.render('quadruples');
});

app.get('/tables.html', (req, res) => {
    res.render('tables');
});

app.get('/retrieveResults', (req,res) => {
    console.log("/retrieveResults");
    var result = "";
    fs.readFile('output_vm.txt', 'utf8', (err,data) => {
        if (err) {
            console.error(err);
            return;
        }
        result = data;
        console.log(result);
        res.end(result);
    });
});

app.get('/retrieveQuadsAndTables', (req,res) => {
    console.log("/retrieveQuadsAndTables");
    var result = "";
    fs.readFile('output_main.txt', 'utf8', (err,data) => {
        if (err) {
            console.error(err);
            return;
        }
        result = data;
        console.log(result);
        res.end(result);
    });
});



app.post('/compileCode', (req, res) => {
    writeFile("output_vm.txt", "");
    console.log(req.body.code);
    saveCode(runMain, req.body.code);
    //res.end();
});


function writeFile(fileName, dataToSend) {
    fs.writeFile(fileName, dataToSend, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file" + fileName + "was saved!")
    });
}

function saveCode(callback, reqBodyCode) {
    //save code
    console.log("/saveCode")
    //console.log("saveCode");
    //console.log(req.body);
    //console.log(res.body);
    fs.writeFile("output_web.txt", reqBodyCode, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file output_web.txt was saved!")
        callback(getOutput);
    });
}

function runMain(callback) {
    // run main.py
    console.log("/runMain");
    var dataToSend;
    // spawn new child process to call the python script
    var python = spawn('python3', ['compiler/main.py', 'output_web.txt']);

    // collect data from script
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        //console.log(dataToSend);
        writeFile("output_main.txt",dataToSend);
    });

    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        //res.send(dataToSend)
        callback();
    });
}

function getOutput() {
    // getOutput.py
    console.log("/getOutput");
    var dataToSend;
    // spawn new child process to call the python script
    const python2 = spawn('python3', ['compiler/virtualMachine.py', 'output_main.txt']);

    //writeFile("output_vm.txt","");
    // collect data from script
    python2.stdout.on('data', function (data) {
        console.log('Pipe data from vm ...');
        dataToSend = data.toString();
        //console.log(dataToSend);
        writeFile("output_vm.txt", dataToSend);
    });

    // in close event we are sure that stream from child process is closed
    python2.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        //res.send(dataToSend)
    });

    console.log("Finish method, going out, bye bye");
}