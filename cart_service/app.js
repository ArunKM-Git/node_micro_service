const express = require('express');
const app = express();

const db_config = require('./configs/db_config');

db_config();

app.use(express.json());

const route = require('./modules/cart/routes');
app.use('/', route);

app.listen(3003, () => {
    console.log('Cart service is listening on port 3003');
});