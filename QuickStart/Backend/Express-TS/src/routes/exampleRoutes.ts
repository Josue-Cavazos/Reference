import { Router } from 'express';
import exampleController from '../controllers/exampleController';

const router = Router();

/**
 * Example routes demonstrating RESTful API
 * Base path: /api/examples
 */

// GET /api/examples - Get all items
router.get('/', exampleController.getAll);

// GET /api/examples/:id - Get single item
router.get('/:id', exampleController.getById);

// POST /api/examples - Create new item
router.post('/', exampleController.create);

// PATCH /api/examples/:id - Update item
router.patch('/:id', exampleController.update);

// DELETE /api/examples/:id - Delete item
router.delete('/:id', exampleController.delete);

export default router;
