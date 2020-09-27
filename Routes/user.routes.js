const express = require('express');
const bodyParser = require('body-parser');
const router = require('express').Router();
let User = require('../Models/User.model');



const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    console.log(req.body);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        nic: req.body.nic,
        contactNumber: req.body.contactNumber,
        AccountNo:req.body.AccountNo,
        BillPaymentHistory: req.body. BillPaymentHistory,
        Credits: req.body.Credits,
        FundTransferHistory: req.body.FundTransferHistory,
    })

    user.save()
        .then(() => res.json('User is added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/pushBillPaymentHistory').post(function (req,res){
    User.findOneAndUpdate(
        { _id: req.body._id },
        {
            $push: {
                BillPaymentHistory: req.body.BillPaymentHistory
            },
        }
    )
        .then(doc => {
            res.send('Bill payment history added');
        })
        .catch(err => {
            console.error(err);
        });
});

router.route('/pushRegisteredPayeesBill').post(function (req,res){
    User.findOneAndUpdate(
        { _id: req.body._id },
        {
            $push: {
                RegisteredPayeesBill: req.body.RegisteredPayeesBill
            },
        }
    )
        .then(doc => {
            res.send('Payee added');
        })
        .catch(err => {
            console.error(err);
        });
});
module.exports = router;
