const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path'); //  бібліотека яка працює зі шляхами (назвами папок)

const app = express();
app.use(express.static(path.join(__dirname, 'static')));


app.get('/', (req, res) => {
    res.end("OK");
    console.log('OK 3000');

    // console.log(__dirname);  шлях до папки
    // console.log(__filename);

});

app.get('/login', (req, res) => {
    res.end("OK");
    console.log('OK 3000');
});

app.get('/register', (req, res) => {
    res.end("OK");
    console.log('OK 3000');
});

app.all('*', (req, res) => {
    res.json('NOT PAGE, 404')
});


app.listen(3000, () => {
    console.log('H E L L O W');
});
