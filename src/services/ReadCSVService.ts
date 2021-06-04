import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'fast-csv';
import { getRepository } from 'typeorm';
import Measurement from '../models/Measurement';

class ReadCSVService {
  public async execute(): Promise<Measurement[]> {
    const measurementsRepository = getRepository(Measurement);

    fs.createReadStream(
      path.resolve(__dirname, '..', '..', 'tmp', 'table1.csv'),
    )
      .pipe(csv.parse({ headers: true }))
      .on('error', error => console.error(error))
      .on('data', async row => {
        const measurement = measurementsRepository.create({
          date: row.date,
          meantemp: row.meantemp,
          humidity: row.humidity,
          wind_speed: row.wind_speed,
          meanpressure: row.meanpressure,
        });

        await measurementsRepository.save(measurement);
      });

    const measurements = await measurementsRepository.find();

    return measurements;
  }
}

export default ReadCSVService;
