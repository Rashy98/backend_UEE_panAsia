
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const UserSchema =  new schema(
    {
        name:{
            type:String,
        },
        email:{
            type:String,
            required: true
        },
        password:{
            type:String,
            required: true
        },
        nic:{
            type:String,
            required: true
        },
        contactNumber:{
            type:Number,
            required: true
        },
        AccountNo:{
          type:Number
        },
        Credits:{
            type:Number,
        },
        RegisteredPayeesBill:{
            type:Array
        },
        RegisteredPayeesFund:{
            type:Array
        },
        BillPaymentHistory:{
            type:Array
        },
        FundTransferHistory:{
            type:Array
        },
        CreditCardPaymentHistory:{
            type:Array
        }
    });

const User= mongoose.model('User',UserSchema);

module.exports = User;
