const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const knexStore = require("../config/db.js");


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(morgan('tiny'));


app.use('/login', require('./router/routes'));
app.use('/register', require('./router/routes'));
app.use('/home', require('./router/routes'));
app.use('/', require('./router/routes'));
app.use('profile', require('./router/routes'));

app.use(session({
    secret: process.env.jwtSecret,
    cookie:{ maxAge: 3600000},
    knexStore,
    resave: false,
    saveUninitialized: false
}));

app.listen(process.env.SPORT, () => {
    console.log(`:: Server is running port: ${process.env.SPORT} ::`)
});
