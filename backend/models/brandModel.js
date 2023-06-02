const mongoose = require("mongoose");

const Brand = new mongoose.Schema({
    title: {
        type: String,
    },
});

module.exports = mongoose.model("Brand", Brand);
