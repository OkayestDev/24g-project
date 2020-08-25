const { DB_HOST, DB_NAME, DB_PASSWORD, DB_USERNAME, DB_PORT } = require('./src/constants');

module.exports = {
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        port: DB_PORT,
        dialect: 'mysql',
        dialectOptions: {
            bigNumberStrings: true,
        },
    },
};
