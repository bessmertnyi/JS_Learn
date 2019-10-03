const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path'); //  бібліотека яка працює зі шляхами (назвами папок)

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const user = [];

app.engine('.hbs', expHbs({
    extname: '.hbs', // обробляє файли .хбс
    defaultLayout: null
}));

app.set('view engine', '.hbs'); // використовувати двіхок engine для файлів .хбс
app.set('views', path.join(__dirname, 'static')); // шлях до всіх 'вюшок', де вони лежать

app.get('/', (req, res) => {
    res.render('main');

    // res.end("OK");
    // console.log('OK 3000');

    // console.log(__dirname);  шлях до папки
    // console.log(__filename);

});

app.get('/login', (req, res) => {
    res.render('login')
});
app.post('/login', (req, res) => {
    const body = body.req;
    // user.forEach(user => {
    //     if ()
    // });

    res.render('login')
});

app.get('/register', (req, res) => {
       res.render('register')
});

app.post('/register', (req, res) => {
    const body = req.body;
    body['user_id'] = user.length + 1;
    user.push('bosy');
    console.log(body);
    res.render('register')
});

app.all('*', (req, res) => {
    res.json('NOT PAGE, 404')
});


app.listen(3000, () => {
    console.log('R U N');
});
