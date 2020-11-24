const express = require('express');
const path = require('path');
const app = express();
//const uuid = require('uuid');

const server = require('http').createServer(app);

// Routing
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
//app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

// Server listen
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log('Server listening at port ' + port);
});

app.get('/favicon.ico', (req,res)=>{
    // return favicon i guess
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/blockly.html',(req,res)=> {
    res.render('blockly');
});


app.post('/setUsername', (req,res) => {
    //console.log(req.body);
    req.session.user = {username: req.body.username};
    return res.redirect('/');
});
