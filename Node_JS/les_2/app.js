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

const {user, render, house} = require('./controllers');   // --> підключення контролерів
const {user: userMiddleware, house: houseMiddleware} = require('./middleware/index');   // --> підключення middleware

let {provider} = require('./dataBase');   // --> підключення dataBase

app.get('/', render.renderMain);
app.get('/login', render.renderLogin);
app.get('/register', render.renderRegister);
app.get('/house', render.renderHouse);
app.get('/updateUser', render.renderUpdateUser);
app.get('/updateHouse', render.renderUpdateHouse);

app.post('/register', userMiddleware.checkUserValidityMiddleware, user.createUser);
app.post('/login', userMiddleware.checkLoginMiddleware, user.userLogin);
app.post('/house', house.createHouse);
app.post('/search', houseMiddleware.checkHouseMiddleware, house.searchHouse);
app.post('/updateUser',userMiddleware.checkUserValidityMiddleware, userMiddleware.checkUserUpdateIdMiddleware, user.updateUsers);
app.post('/updateHouse', houseMiddleware.checkHouseUpdateIdMiddleware, houseMiddleware.checkHouseUpdateIdMiddleware, house.updateHouses);


app.get('/user/:userId', userMiddleware.checkUserIdMiddleware, user.userById);
app.get('/house/:houseId', houseMiddleware.checkHouseIdMiddleware, house.houseById);


app.all('*', async (req, res) => {

    /*let [query] = await provider.promise().query('SELECT * FROM user');
    console.log(query[0]);
    res.json(query[0]);*/

    res.json('NOT PAGE, 404')
});

app.listen(3000, () => {
    console.log('R U N  -  3 0 0 0');
});
