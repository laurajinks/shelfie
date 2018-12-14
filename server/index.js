require('dotenv').config();
const {json} = require('body-parser');
const express = require('express');
const massive = require('massive');
const cors = require('cors');
const {getInventory} = require('./controller');
const {addProduct} = require('./controller')
const port = 3001;
const app = express();

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db);
    console.log('Database Connected');
})
.catch(err => console.log(err));

app.get('/api/inventory', getInventory);
app.post('/api/product', addProduct);

app.listen(port, console.log(`Listening on ${port}...`));