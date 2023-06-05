import { Request, Response } from 'express';
import { TodoTask } from '../models/task';

// Create a new task
export const createTask = async (req: Request, res: Response) => {
    try {
        const { title, description, completed } = req.body;

        // Create a new task in the database
        const newTask = await TodoTask.create({ title, description, completed });

        res.status(201).json(newTask);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Failed to create task' });
    }
};

// Get all tasks
export const getAllTasks = async (req: Request, res: Response) => {
    try {
        // Fetch all tasks from the database
        const tasks = await TodoTask.findAll();

        res.json(tasks);
    } catch (error) {
        console.error('Error retrieving tasks:', error);
        res.status(500).json({ error: 'Failed to retrieve tasks' });
    }
};

// Get a specific task by ID
export const getTaskById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Find the task with the given ID
        const task = await TodoTask.findByPk(id);

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.json(task);
    } catch (error) {
        console.error('Error retrieving task:', error);
        res.status(500).json({ error: 'Failed to retrieve task' });
    }
};

// Update a task
export const updateTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;

        // Find the task with the given ID
        const task = await TodoTask.findByPk(id);

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        // Update the task in the database
        await task.update({ title, description, completed });

        res.json(task);
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ error: 'Failed to update task' });
    }
};

// Delete a task
export const deleteTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Find the task with the given ID
        const task = await TodoTask.findByPk(id);

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        // Delete the task from the database
        await task.destroy();

        res.sendStatus(204);
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ error: 'Failed to delete task' });
    }
};