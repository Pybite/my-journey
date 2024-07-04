const path = require('path');
require('dotenv').config({
    override: true,
    path: path.join(__dirname, 'dev.env')
});

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.HOST,
        port: process.env.PORT,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
});






module.exports = knex;
