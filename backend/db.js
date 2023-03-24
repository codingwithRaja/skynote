

const mongoose = require('mongoose')
// require('dotenv').config()
const mongoURI = "mongodb://127.0.0.1:27017/skydb?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0"

const connectToMongo = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected suxxesfully to MongoDB'))
        .catch(error => console.error('Error connecting to MongoDB', error));
}

module.exports = connectToMongo;