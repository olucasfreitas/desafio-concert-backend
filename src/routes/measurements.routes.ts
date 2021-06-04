/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';
import { getRepository } from 'typeorm';

import Measurement from '../models/Measurement';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ReadCSVService from '../services/ReadCSVService';
import DeleteOldDataService from '../services/DeleteOldDataService';

const measurementsRouter = Router();

measurementsRouter.use(ensureAuthenticated);

measurementsRouter.get('/', ensureAuthenticated, async (request, response) => {
  const measurementsRepository = getRepository(Measurement);
  const measurements = await measurementsRepository.find();
  return response.json(measurements);
});

measurementsRouter.post('/', ensureAuthenticated, async (request, response) => {
  const readCSV = new ReadCSVService();

  const finalCSV = await readCSV.execute();

  return response.json(finalCSV);
});

measurementsRouter.delete(
  '/',
  ensureAuthenticated,
  async (request, response) => {
    const deletedData = new DeleteOldDataService();

    return response.status(201).json(deletedData.execute());
  },
);

export default measurementsRouter;
