module.exports = async () => {
    try {
        const mongoose = require('mongoose');

        const db_url = 'mongodb://localhost:27017/user_micro_service';

        mongoose.connect(db_url).then(data => {
            console.log('User database connected successfully')
        }).catch(err => {
            console.log('Failed to connect user database - ' + err);
            process.exit();
        })
    } catch (err) {
        console.log('Failed to connect user database - ' + err.message);
        process.exit();
    }
}