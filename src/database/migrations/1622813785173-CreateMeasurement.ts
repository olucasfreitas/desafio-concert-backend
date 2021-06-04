import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateMeasurement1622813785173
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'measurements',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'date',
            type: 'date',
          },
          {
            name: 'meantemp',
            type: 'float',
          },
          {
            name: 'humidity',
            type: 'float',
          },
          {
            name: 'wind_speed',
            type: 'float',
          },
          {
            name: 'meanpressure',
            type: 'float',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('measurements');
  }
}
