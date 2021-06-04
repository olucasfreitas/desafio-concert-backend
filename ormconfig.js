console.log(process.env.DATABASE_URL);

module.exports = {
  url: process.env.DATABASE_URL,
  type: 'postgres',
  entities: ['./dist/models/*.js'],
  migrations: ['./dist/database/migrations/*.js'],
  cli: {
    migrationsDir: './dist/database/migrations',
  },
};
