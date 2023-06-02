const mongoose = require("mongoose");

const Category = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    brand:{type: mongoose.Schema.Types.String}
});

module.exports = mongoose.model("Category", Category);
