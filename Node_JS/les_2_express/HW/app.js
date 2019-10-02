const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.get('/', (req, res) => {

    console.log('H E L L O W');
});

app.listen(3000, ()=> {
    console.log('H E L L O W');
});
