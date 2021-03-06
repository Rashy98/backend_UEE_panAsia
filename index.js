const {MongoClient} = require('mongodb');
const bodyParser =require( "body-parser");
const mongoose = require('mongoose');
const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const router = require('express').Router();
// const passport = require("passport");



app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());


const Users= require('./Routes/user.routes');

app.use('/user', Users);

//Passport middleware
// app.use(passport.initialize());
// // Passport config
// require("./config/passport")(passport);
// // Routes
// app.use("/api/users", users);



const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb+srv://admin:admin@cluster0.wh1vq.mongodb.net/UeePanAsia?retryWrites=true&w=majority", { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo database Successfully connected");
})

app.listen(port, () => {
    console.log(`Server is running on port:  ${port}`);
})

