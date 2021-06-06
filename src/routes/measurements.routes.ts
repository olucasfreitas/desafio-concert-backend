/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';
import { getRepository } from 'typeorm';

import Measurement from '../models/Measurement';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ReadCSVService from '../services/ReadCSVService';

const measurementsRouter = Router();

measurementsRouter.get('/', ensureAuthenticated, async (request, response) => {
  const measurementsRepository = getRepository(Measurement);
  const measurements = await measurementsRepository.find();
  return response.json(measurements);
});

measurementsRouter.post('/', ensureAuthenticated, async (request, response) => {
  const readCSV = new ReadCSVService();
  const measurementsRepository = getRepository(Measurement);

  await measurementsRepository.query(`DELETE FROM measurements`);

  await readCSV.execute();

  const measurements = await measurementsRepository.find();

  return response.json(measurements);
});

export default measurementsRouter;
