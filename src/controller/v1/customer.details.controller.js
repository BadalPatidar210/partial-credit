const express = require('express');
const {CustomerDetailsServices} = require('../../services');

const router = express.Router();

router.post('/add',async (req,res) =>{
    try{
        await CustomerDetailsServices.addCustomer(req.body)
        res.send({
            success: true,
            message: 'Customer added successfully'
        })
    }catch(err){
        console.error(err);
    }
})

router.get('/getCustomer', async (req, res) =>{
    try{
        const customer = await CustomerDetailsServices.getCustomerByCustomerId(req.query);
        res.send({
            success: true,
            data: customer
        })
    }catch(err){
        console.error(err);
    }
})


router.get('/getCustomers', async (req, res) =>{
    try{
        const customers = await CustomerDetailsServices.getCustomersBySalesId(req.query);
        res.send({
            success: true,
            data: customers
        })
    }catch(err){
        console.error(err);
    }
})

module.exports = router;