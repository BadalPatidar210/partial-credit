const mongoose = require('mongoose');

const customerDetails = new mongoose.Schema(
    {
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

customerDetails.virtual('customerId').get(function () { return this._id.toString(); });

module.exports = mongoose.model('CustomerDetails', customerDetails)