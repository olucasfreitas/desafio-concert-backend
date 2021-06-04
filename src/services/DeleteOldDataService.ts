import { getRepository } from 'typeorm';
import Measurement from '../models/Measurement';

class DeleteOldDataService {
  public async execute(): Promise<void> {
    const measurementsRepository = getRepository(Measurement);
    await measurementsRepository.query(`DELETE FROM measurements`);
  }
}

export default DeleteOldDataService;
