const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: [true, 'todo title is required'],
    },
    complete: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'user id is required'],
    },
    isdelete: {
        type: Boolean,
        default: false
    }
});
TodoSchema.plugin(timestamps);
const Todo = mongoose.model('todo', TodoSchema);
module.exports = Todo;