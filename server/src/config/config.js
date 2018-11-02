module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'vueexpress',
    user: process.env.DB_USER || 'neha',
    password: process.env.DB_PASS || '12345',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './tabtracker.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
