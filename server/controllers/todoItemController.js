const TodoItem = require('../models/TodoItemModel');

exports.getTodoItems = async (req, res, next) => {
    try {
        const todoItems = await TodoItem.find();
        return res.status(200).json({
            success: true,
            count: todoItems.length,
            data: todoItems
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}

exports.addTodoItem = async (req, res, next) => {
    try {
        const { name, type, value } = req.body;
        const todoItem = await TodoItem.create(req.body);
        return res.status(201).json({
            success: true,
            data: todoItem
        });
    } catch (err) {
        if(err.name === 'Validation Error') {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server error'
            });
        }
    }
}
exports.deleteTodoItem = async (req, res, next) => {
    try {
        const todoItem = await TodoItem.findById(req.params.id);
        if(!todoItem) {
        res.status(404).json({
            success: false,
            error: 'No item found'
        });
        }
        await todoItem.remove();
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}
