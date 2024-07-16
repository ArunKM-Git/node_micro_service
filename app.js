const express = require('express');

const app = express();

app.use(express.json());

//All routes start
const user_routes = require('./routes/user_routes');
app.use('/user', user_routes);

const product_routes = require('./routes/product_routes');
app.use('/product', product_routes);

const cart_routes = require('./routes/cart_routes');
app.use('/cart',cart_routes);
//All routes end

app.listen(3000, () => {
    console.log('Gateway API is listening on port 3000');
});