const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const port = 3000;

const indexRoute = require("./routes/index");
app.use("/", indexRoute);

app.set("view engine", "ejs");
app.set("views", "./views");

const onConnect = () => {
    console.log(`App running on port ${port}`);
};

dbConnect();
async function dbConnect() {
    try {
        const connection = await mongoose.connect(process.env.DB_URI);

        if (!connection) return console.warn("Error connecting to DB");
        console.log("Connected to DB");
        app.listen(port, onConnect);
    } catch (error) {
        console.warn(`An error occurred while connecting to DB: ${error}`);
    }
};