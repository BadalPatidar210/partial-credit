const express = require('express');
const { TransactionLogsServices, CustomerDetailsServices } = require('../../services');
const app = express();

const router = express.Router();


router.post('/pay',async (req,res) =>{
    try{
        const data = await TransactionLogsServices.addTransactionByCustomer(req.body);
        
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