const Joi = require('joi');

const addTransactionByCustomerValidator = {
    body: Joi.object().keys({
        paymentMode: Joi.string().required(),
        paidAmount: Joi.number().required(),
        customerId:Joi.string().required(),
    })
}

module.exports = {
    addTransactionByCustomerValidator
}