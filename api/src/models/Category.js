// for Action, Comedy, Thriller

const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    deleted_at: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model("Category", categorySchema);
