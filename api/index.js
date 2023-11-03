const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport"); // authentication middleware for node js
const LocalStrategy = require("passport-local").Strategy

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false })); // middleware to handle url encoded form data
app.use(bodyParser.json()); // sets body-parser middleware to json data
app.use(passport.initialize()); //initialization of passport
const jwt = require("jsonwebtoken"); //connecting app to backend

mongoose.connect(
    "mongodb+srv://elakkiarun003:realtime-messenger@cluster0.4jdcwvh.mongodb.net/",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("Connected to Mongo Db");
}).catch((err) => {
    console.log("error connecting to Mongo Db", err);
});

app.listen(port, () => {
    console.log("Server running on port 8000");
});

const User = require("./models/user");
const Message = require("./models/message");

//endpoint for registration of the user

app.post("/register", (req, res) => {
    const { name, email, password, image } = req.body;

    //create a new user object
    const newUser = new User({ name, email, password, image })

    //save the user in database
    newUser.save().then(() => {
        res.status(200).json({ message: "User registered successfully" })
    }).catch((err) => {
        console.log("Error registering user: " + err);
        res.status(500).json({ message: "Error registering the user!" })
    })
})