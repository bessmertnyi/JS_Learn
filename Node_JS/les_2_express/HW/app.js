const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path'); //  бібліотека яка працює зі шляхами (назвами папок)

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({extended: true})); // розпізнає той JSON ))

const users = [];

app.engine('.hbs', expHbs({ // двіжок
    extname: '.hbs', // обробляє файли .хбс
    defaultLayout: null // фіксить папку Layout
}));

app.set('view engine', '.hbs'); // використовувати двіхок engine для файлів .хбс
app.set('views', path.join(__dirname, 'static')); // шлях до всіх 'вюшок', де вони лежать

app.get('/', (req, res) => {
    res.render('main');
    // console.log(__dirname);  // шлях до папки
    // console.log(__filename);  // шлях до файлу
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.post('/login', (req, res) => {
    const log = req.body;
    users.forEach(search => {
        if (search.userName === log.name && search.userPassword === log.password) {
            res.redirect(`/user/${search.user_id}`)
        } else {
            res.json('NOT PAGE, 404')
        }
    });
});

app.get('/user/:id', (req, res) => {
    const userSearch = users.find(ses =>
        +req.params.id === ses.user_id
    );
    console.log(req.params);
    res.json(userSearch)
});

app.get('/register', (req, res) => {
    res.render('register')
});

app.post('/register', (req, res) => {
    const user = req.body;
    user.user_id = users.length + 1;
    users.push(user);
    console.log(user);
});

app.all('*', (req, res) => {
    res.json('NOT PAGE, 404')
});

app.listen(3000, () => {
    console.log('R U N  -  3 0 0 0');
});
