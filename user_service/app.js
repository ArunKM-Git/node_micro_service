const express = require('express');
const app = express();

const db_config = require('./configs/db_config');

db_config();

app.use(express.json());

const route = require('./modules/user/routes');
app.use('/', route);

app.listen(3001, () => {
    console.log('User service is listening on port 3001');
});