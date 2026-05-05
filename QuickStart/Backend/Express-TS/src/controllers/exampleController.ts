import { Request, Response, NextFunction } from 'express';
import exampleService from '../services/exampleService';
import { catchAsync } from '../middleware/errorHandler';
import logger from '../logger';

/**
 * Example controller demonstrating request handling
 * Controllers handle HTTP requests and responses
 * Business logic should be in services
 */

export class ExampleController {
  /**
   * Get all items
   * GET /api/examples
   */
  getAll = catchAsync(async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const items = await exampleService.getAll();
    
    res.status(200).json({
      status: 'success',
      results: items.length,
      data: { items },
    });
  });

  /**
   * Get single item by ID
   * GET /api/examples/:id
   */
  getById = catchAsync(async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const item = await exampleService.getById(id);
    
    res.status(200).json({
      status: 'success',
      data: { item },
    });
  });

  /**
   * Create new item
   * POST /api/examples
   */
  create = catchAsync(async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const item = await exampleService.create(req.body);
    
    logger.info('New item created');
    
    res.status(201).json({
      status: 'success',
      data: { item },
    });
  });

  /**
   * Update item
   * PATCH /api/examples/:id
   */
  update = catchAsync(async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const item = await exampleService.update(id, req.body);
    
    res.status(200).json({
      status: 'success',
      data: { item },
    });
  });

  /**
   * Delete item
   * DELETE /api/examples/:id
   */
  delete = catchAsync(async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { id } = req.params;
    await exampleService.delete(id);
    
    res.status(204).json({
      status: 'success',
      data: null,
    });
  });
}

export default new ExampleController();
