const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path'); //  бібліотека яка працює зі шляхами (назвами папок)

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({extended: true})); // розпізнає той JSON ))


app.engine('.hbs', expHbs({ // двіжок
    extname: '.hbs', // обробляє файли .хбс
    defaultLayout: null // фіксить папку Layout
}));

app.set('view engine', '.hbs'); // використовувати двіхок engine для файлів .хбс
app.set('views', path.join(__dirname, 'static')); // шлях до всіх 'вюшок', де вони лежать

const { user, render } = require('./controllers');   // --> підключення контролерів
const {user: userMiddleware} = require('./middleware/index');   // --> підключення middleware
let { provider } = require('./dataBase');   // --> підключення dataBase

app.get('/', render.renderMain);
app.get('/login', render.renderLogin);
app.get('/register', render.renderRegister);
app.get('/house', render.renderHouse);

app.post('/register', userMiddleware.checkUserValidityMiddleware, user.createUser);
app.post('/login',userMiddleware.checkLoginMiddleware, user.userLogin);

app.get('/user/:userId', userMiddleware.checkUserIdMiddleware, user.userById);

app.post('/house', (req, res) => {
    const newHouse = req.body;
    newHouse.house_id = houses.length + 1;
    houses.push(newHouse);
    console.log(newHouse);
    // res.redirect(`/house/${newHouse.house_id}`)
});

app.get('/house/:id', (req, res) => {
    const houseSearch = houses.find(oeo =>
        +req.params.id === oeo.house_id
    );
    console.log(req.params);
    res.json(houseSearch);
});

app.post('/search', (req, res) => {
    const info = req.body;

    const foundHouse = houses.find(search => search.city === info.city);
    foundHouse ? res.redirect(`/house/${foundHouse.house_id}`) : res.status(404).render('NOT PAGE, 404')
});

app.all('*', async (req, res) => {

    /*let [query] = await provider.promise().query('SELECT * FROM user');
    console.log(query[0]);
    res.json(query[0]);*/

    res.json('NOT PAGE, 404')
});

app.listen(3000, () => {
    console.log('R U N  -  3 0 0 0');
});
