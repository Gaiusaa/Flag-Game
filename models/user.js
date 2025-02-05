const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {type: String, Required: true, Unique: true},
    password: {type: String, required: true},
},  {collection: "users"});

const user = mongoose.model("user", userSchema);

module.exports = {user};