module.exports = async () => {
    try {
        const mongoose = require('mongoose');

        const db_url = 'mongodb://localhost:27017/product_micro_service';

        mongoose.connect(db_url).then(data => {
            console.log('Product database connected successfully')
        }).catch(err => {
            console.log('Failed to connect product database - ' + err);
            process.exit();
        })
    } catch (err) {
        console.log('Failed to connect product database - ' + err.message);
        process.exit();
    }
}