module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'bill',
      password: '123456',
      database: 'dev_test'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/orm/knex/migrations`
    },
    seeds: {
      directory: `${__dirname}/orm/knex/seeds`
    }
  }
};