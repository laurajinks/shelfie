require('dotenv').config();
const {json} = require('body-parser');
const express = require('express');
const massive = require('massive');
const port = 3001;
const app = express();

app.use(json());

massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db);
    console.log('Database Connected');
})
.catch(err => console.log(err));

//Paths here

app.listen(port, console.log(`Listening on ${port}...`));