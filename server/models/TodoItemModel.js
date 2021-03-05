const mongoose = require('mongoose');

const TodoItemSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('TodoItem', TodoItemSchema);