const mongoose = require('mongoose');

const customerDetails = new mongoose.Schema(
    {
        customerId:{
            type: String,
        },
        customerName:{
            type: String,
        },
        salesRepresentativeId:{
            type: String,
        },
        salesRepresentativeName:{
            type:String,
        },
        totalAmount:{
            type:Number,
        },
        installmentCount:{
            type:Number,
        }
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model('CustomerDetails', customerDetails)