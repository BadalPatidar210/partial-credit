const CustomerDetails = require('../models/customer.details.model');
const TransactionLogs= require('../models/transaction.logs.model');
const { getCustomerByCustomerId } = require('./customer.details.services');

async function addTransactionByCustomer(requestBody){
    const {paymentMode,paidAmount,customerId} = requestBody;
    const customerDetails = await getCustomerByCustomerId({customerId});

    if(customerDetails!= null && customerDetails.totalAmount >= paidAmount) {
        let pendingAmount = customerDetails.totalAmount - paidAmount;
        const transactionLog =  await TransactionLogs.create({
            customerId:customerDetails._id,
            totalAmount:customerDetails.totalAmount,
            paymentStatus: 'SUCCESS',
            installmentCount: customerDetails.installmentCount +1,
            paymentMode,
            paidAmount,
            pendingAmount,
        })
        return transactionLog;
    }
    return null;
}

module.exports = {
    addTransactionByCustomer
}
