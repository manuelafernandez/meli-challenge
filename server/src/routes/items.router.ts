import { Router } from 'express';
import { GetController, SearchController } from '../controllers/items.controller';

const itemRouter = Router();

itemRouter.get('/items', SearchController);
itemRouter.get('/items/:id', GetController);

export default itemRouter;
