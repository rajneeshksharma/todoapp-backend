const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
            
    },
    lastName: {
        type: String,
        required: [true, 'lastName is required'],
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
const User = mongoose.model('user', userSchema);
module.exports = User;