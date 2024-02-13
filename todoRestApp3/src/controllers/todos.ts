// import { RequestHandler } from 'express';
// import { Todo } from '../models/todo';

// const TODOS: Todo[] = [];

// export const createTodo: RequestHandler = (req, res, next) => {
//     const text = (req.body as { text: string }).text;
//     const newTodo = new Todo(Math.random().toString(), text);
//     TODOS.push(newTodo);
//     res.status(201).json({ message: 'Created the todo.', createTodo: newTodo });
// };

// export const getTodos: RequestHandler = (req, res, next) => {
//     res.json({ todos: TODOS });
// }

// export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
//     const todoId = req.params.id;
//     const updatedText = (req.body as { text: string }).text;
//     const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

//     if (todoIndex < 0) {
//         throw new Error('Could not find todo!');
//     }

//     TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);
//     res.json({ message: 'Updated!', updateTodo: TODOS[todoIndex] });
// };

// export const deleteTodo: RequestHandler = (req, res, next) => {
//     const todoId = req.params.id;
//     const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

//     if (todoIndex < 0) {
//         throw new Error('Could not find todo!');
//     }

//     TODOS.splice(todoIndex, 1);
//     res.json({ message: 'Todo deleted!' });
// };

import { RequestHandler } from 'express';
import Todo, { TodoModel } from '../models/todo';

export const createTodo: RequestHandler = async (req, res, next) => {
  try {
    const data: TodoModel = req.body;
    let todos = await Todo.create(data);
    console.log('data', data);
    return res
      .status(200)
      .json({ message: 'Todo created sucessfully', data: todos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTodos: RequestHandler = async (req, res, next) => {
  try {
    let todos = await Todo.find({});
    return res.status(200).json({ message: 'All todos', data: todos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTodo: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    let todos = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    return res
      .status(200)
      .json({ message: 'Todo updated succesfully', data: todos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTodo: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    let isDeleted = await Todo.findByIdAndDelete(id);
    if (!isDeleted) throw new Error('Failed to delete todo!');
    return res.status(200).json({ message: 'Todo deleted successfully!' });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};