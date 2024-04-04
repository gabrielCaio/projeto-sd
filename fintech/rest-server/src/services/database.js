require("dotenv").config()
const { Sequelize } = require("sequelize")

const dbConfig = {
    development: {
      username: process.env.POSTGRES_PASSWORD,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_PASSWORD,
      host: 'db',
      dialect: 'postgres',
      logging: false,
    },
}

const sequelize = new Sequelize(dbConfig.development)

sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err))

module.exports = sequelize;