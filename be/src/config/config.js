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
    "username": "jdmlhtxexohgah",
    "password": "68a4badfca040ec02f3fbe040703bcffca6ed2207d70ff985eed669482f3f0d6",
    "database": "dbqa04be2v3n43",
    "host": "ec2-54-246-85-151.eu-west-1.compute.amazonaws.com",
    "dialect": "postgres"
  }
}
