module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'postgres',
      user:     'postgres',     // Troque pelo seu usuário do PostgreSQL
      password: 'postgres'       // Troque pela sua senha do PostgreSQL
    },
    migrations: {
      directory: './migrations'
    }
  }
};