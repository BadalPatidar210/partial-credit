const Joi = require('joi');

const addCustomerValidator = {
    body: Joi.object().keys({
        customerName: Joi.string().required(),
        salesRepresentativeId: Joi.string().required(),
        salesRepresentativeName:Joi.string().required(),
        totalAmount:Joi.number().required(),
        installmentCount:Joi.number().required(),
    })
}

const getCustomerValidator = {
    params: Joi.object().keys({
        customerId: Joi.string(),
    })
}

const getCustomersValidator = {
    params:  Joi.object().keys({
        salesRepresentativeId: Joi.string().required(),
    })
}

module.exports = {
    addCustomerValidator,
    getCustomerValidator,
    getCustomersValidator
}