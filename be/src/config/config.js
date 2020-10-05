require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.db_username,
    "password": process.env.db_password,
    "database": process.env.db_database,
    "host": process.env.db_host,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "xDnjqTTQ7Q",
    "password": "LV5vLVxKdF",
    "database": "xDnjqTTQ7Q",
    "host": "remotemysql.com",
    "dialect": "mysql",
  }
}
