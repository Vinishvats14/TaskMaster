import { Response } from 'express';
import Todo from '../models/Todo';
import { AuthRequest } from '../middleware/auth';

export const createTodo = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { title, description } = req.body;

    const todo = await Todo.create({
      title,
      description,
      userId: req.userId
    });

    res.status(201).json({
      success: true,
      todo
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getTodos = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const todos = await Todo.find({ userId: req.userId }).sort({ createdAt: -1 });

    res.json({
      success: true,
      todos
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTodo = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const todo = await Todo.findOne({ _id: id, userId: req.userId });

    if (!todo) {
      res.status(404).json({ message: 'Todo not found' });
      return;
    }

    if (title !== undefined) todo.title = title;
    if (description !== undefined) todo.description = description;
    if (completed !== undefined) todo.completed = completed;

    await todo.save();

    res.json({
      success: true,
      todo
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTodo = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const todo = await Todo.findOneAndDelete({ _id: id, userId: req.userId });

    if (!todo) {
      res.status(404).json({ message: 'Todo not found' });
      return;
    }

    res.json({
      success: true,
      message: 'Todo deleted successfully'
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
