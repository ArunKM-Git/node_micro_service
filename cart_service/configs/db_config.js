module.exports = async () => {
    try {
        const mongoose = require('mongoose');

        const db_url = 'mongodb://localhost:27017/cart_micro_service';

        mongoose.connect(db_url).then(data => {
            console.log('Cart database connected successfully')
        }).catch(err => {
            console.log('Failed to connect cart database - ' + err);
            process.exit();
        })
    } catch (err) {
        console.log('Failed to connect cart database - ' + err.message);
        process.exit();
    }
}