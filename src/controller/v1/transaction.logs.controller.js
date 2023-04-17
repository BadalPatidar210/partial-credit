const express = require('express');
const { TransactionLogsValidators } = require('../../libs/validators');
const { validate } = require('../../middleware');
const { TransactionLogsServices, CustomerDetailsServices } = require('../../services');


const router = express.Router();

router.post('/pay',validate(TransactionLogsValidators.addTransactionByCustomerValidator), async (req,res) =>{
    try{
        const {transactionLog,customerName} = await TransactionLogsServices.addTransactionByCustomer(req.body);
        let data = {
            ...transactionLog._doc,
            customerName: customerName
        }
        if(data != null && data != 'undefined'){
            await CustomerDetailsServices.updateCustomer(data)
            res.send({
                success: true,
                data:data,
                message: 'Payment successfully'
            })
        } else  {
            res.send({success: false, message: 'Please enter valid transaction'})
        }
    }catch(err){
        console.error(err);
    }
})

module.exports = router;