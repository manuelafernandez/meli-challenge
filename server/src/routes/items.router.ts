import { Router } from 'express';
import { ItemsController }from '../controllers/items.controller';

const itemRouter = Router();

itemRouter.get('/items', ItemsController.search);
itemRouter.get('/items/:id', ItemsController.get);

export default itemRouter;
