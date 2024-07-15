const express = require('express');
const app = express();

const db_config = require('./configs/db_config');

db_config();

app.use(express.json());

const route = require('./modules/product/routes');
app.use('/', route);

app.listen(3002, () => {
    console.log('Product service is listening on port 3002');
});