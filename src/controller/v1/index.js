const express = require('express');

const CustomerDetailsController = require('./customer.details.controller')
const TransactionController = require('./transaction.logs.controller');

const router = express.Router();

router.use('/customer', CustomerDetailsController);
router.use('/transaction', TransactionController);

module.exports = router;