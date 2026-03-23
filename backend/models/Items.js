const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
    },
    {timestamps: true}
);

modele.exports = mongoose("Item", itemSchema);