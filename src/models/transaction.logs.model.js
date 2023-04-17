const mongoose = require('mongoose');

const transactionLogs = new mongoose.Schema(
    {
        paymentId:{
            type: String,
        },
        customerId:{
            type: String,
            ref:'CustomerDetails',
        },
        totalAmount:{
            type:Number,
        },
        paidAmount:{
            type: Number,
        },
        pendingAmount:{
            type: Number,
        },
        paymentMode:{
            type: String,
        },
        paymentStatus:{
            type: String,
        },
        installmentCount:{
            type:Number,
        }
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model('TransactionLogs', transactionLogs)