const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        poster: {
            type: String
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
        },
        year: {
            type: String
        },
        deleted_at: {
            type: Date,
            default: null
        }
    },
);

module.exports = mongoose.model("Movie", movieSchema);
