import {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
} from '../controllers/task_controller';
import express from 'express';

const router = express.Router();

/* GET all tasks . */
// Create a new task
router.post('/', createTask);

// Get all tasks
router.get('/', getAllTasks);

// Get a specific task by ID
router.get('/:id', getTaskById);

// Update a task
router.patch('/:id', updateTask);

// Delete a task
router.delete('/:id', deleteTask);
export default router;
module.exports = router;
