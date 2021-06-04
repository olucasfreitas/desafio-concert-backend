import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const measurementsRouter = Router();

measurementsRouter.use(ensureAuthenticated);

measurementsRouter.get('/', async (request, response) => {
  return response.send();
});

measurementsRouter.post('/', async (request, response) => {
  return response.send();
});

export default measurementsRouter;
