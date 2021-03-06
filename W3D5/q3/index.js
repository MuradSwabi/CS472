const express  = require('express');
const path     = require('path');
const app      = express();

app.use(express.urlencoded({extended:false}));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.post('/result', (req, res) => {
    let { name, age } = req.body;

    res.send(`Welcome ${name} age: ${age}`)
});
// port listen
app.listen(3000);