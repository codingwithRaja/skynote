
const mongoose = require('mongoose');



const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: password,
        required: true
    },
    date: {
        type: Date,
        default: date.now
    }
});

module.exports = mongoose.model("user", UserSchema);