const express = require('express');
const router = express.Router();
const { getTodoItems, addTodoItem, deleteTodoItem } = require('../controllers/todoItemController');

router
    .route('/')
    .get(getTodoItems)
    .post(addTodoItem)

router
    .route('/:id')
    .delete(deleteTodoItem)

module.exports = router;