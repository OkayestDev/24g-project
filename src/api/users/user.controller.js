const transactionDal = require('../knex/dals/transaction.dal');
const { Influencers } = require('../influencers');
const moment = require('moment');
const { runTakeProfitAlgorithm } = require('./run-take-profit');
const redisClient = require('../utils/redis-client');

const momentFormat = 'YYYY-MM-DD';
