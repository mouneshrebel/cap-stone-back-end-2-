const express = require("express");
const app = express();
const cors = require("cors");
const bodyPaser = require('body-parser');
const booksRoute = require ("./routes/books");
const mongoose = require('mongoose');


app.use(cors());
app.use (bodyPaser.json());

app.use('/books', booksRoute);


mongoose.connect("mongodb+srv://mouneshrebel60:rebelrkm@arkmdairy.suciopu.mongodb.net/?retryWrites=true&w=majority&appName=ArkmDairy");

const con = mongoose.connection;

try{
    con.on("open", () =>{
        console.log("MongoDB connected!!!!!!!!")
    });
} catch(error){
    console.log("Error" + error);
}

app.get ('/',(req,res) => {
    res.send("Welcome to Arkm dairy Manager !!!!");
})

app.listen(5000);