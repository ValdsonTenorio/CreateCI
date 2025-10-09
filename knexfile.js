module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'db', 
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_DATABASE || 'productdb',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres'
    },
    migrations: {
      directory: './migrations'
    }
  },

  
  test: {
    client: 'pg', 
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: './migrations'
    }
  }
};
