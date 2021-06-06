console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL);
module.exports = {
  type: 'postgres',
  url: 'postgres://otmaypuofwbsxb:49360bf472d95b536ab97fe8a9179e440f1840e829193eabaab47ca66d09ecb2@ec2-54-90-211-192.compute-1.amazonaws.com:5432/d8q8v47bsv9ib7',
  entities: ['dist/models/**/*.js'],
  migrations: ['dist/database/migrations/**/*.js'],
  cli: {
    migrationsDir: ['src/database/migrations/'],
    entitiesDir: 'src/models',
  },
};
