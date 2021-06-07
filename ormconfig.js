console.log(
  'process.env.DATABASE_URL :>> ',
  'postgres://gehnfggmtvcfer:43788658b90dc66af07ed6ac637c2c6018b9edd655b60f8e72fff0f7593b6b90@ec2-52-5-247-46.compute-1.amazonaws.com:5432/d9utojbl27m49c',
);
module.exports = {
  type: 'postgres',
  url: 'postgres://gehnfggmtvcfer:43788658b90dc66af07ed6ac637c2c6018b9edd655b60f8e72fff0f7593b6b90@ec2-52-5-247-46.compute-1.amazonaws.com:5432/d9utojbl27m49c',
  entities: ['dist/models/**/*.js'],
  migrations: ['dist/database/migrations/**/*.js'],
  cli: {
    migrationsDir: ['src/database/migrations/'],
    entitiesDir: 'src/models',
  },
};
