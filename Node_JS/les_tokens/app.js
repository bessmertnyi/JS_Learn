const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path'); //  бібліотека яка працює зі шляхами (назвами папок)

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({extended: true})); // розпізнає той JSON ))

const db = require('./database').getInstance();
db.setModels();

app.engine('.hbs', expHbs({ // двіжок
    extname: '.hbs', // обробляє файли .хбс
    defaultLayout: null // фіксить папку Layout
}));

app.set('view engine', '.hbs'); // використовувати двіхок engine для файлів .хбс
app.set('views', path.join(__dirname, 'static')); // шлях до всіх 'вюшок', де вони лежать

const { authRouter, userRouter, houseRouter } = require('./router');

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/houses', houseRouter);



app.all('*', (req, res) => {
    res.json('NOT PAGE, 404')
});

app.listen(3000, () => {
    console.log('R U N  -  3 0 0 0');
});
