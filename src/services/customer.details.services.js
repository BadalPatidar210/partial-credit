const CustomerDetails = require('../models/customer.details.model');

async function addCustomer(requestBody){
    const {customerName, salesRepresentativeId, salesRepresentativeName, totalAmount, installmentCount} = requestBody;
    await CustomerDetails.create({
        customerName,
        salesRepresentativeId,
        salesRepresentativeName,
        totalAmount,
        installmentCount
    })
}

async function getCustomersBySalesId(queryParams){
    const { salesRepresentativeId } = queryParams;
    const customers = await CustomerDetails.find({salesRepresentativeId})
    return customers;
}

async function getCustomerByCustomerId(queryParams){
    const { customerId } = queryParams;
    const customer = await CustomerDetails.findOne({_id: customerId})
    return customer;
}

async function updateCustomer(customerDetails){
    const newCustomerDetails = {
        totalAmount: customerDetails.pendingAmount,
        installmentCount: customerDetails.installmentCount,
    }

    try {
      const filter = { _id: customerDetails.customerId };
      const update = { $set: newCustomerDetails };

      await CustomerDetails.updateOne(filter, update);
    } catch (error) {
      console.error(error);
    }

}

module.exports = {
    addCustomer,
    getCustomersBySalesId,
    getCustomerByCustomerId,
    updateCustomer
}