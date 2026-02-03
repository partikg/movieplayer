// for name, email, password

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    deleted_at: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model("Users", userSchema);
