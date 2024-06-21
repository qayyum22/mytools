const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL;

exports.connect = () => {
    return mongoose.connect(MONGODB_URL)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.log(err);
            console.error('Connection failed');
            process.exit(1);
        })
}

