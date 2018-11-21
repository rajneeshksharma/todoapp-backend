const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    social_id: {
        type: String,
        require: true,
        default: null
    },
    provider: {
        type: String,
        required: true,
        default: "Local"
    }
});
const User = mongoose.model('users', userSchema);
module.exports = User;