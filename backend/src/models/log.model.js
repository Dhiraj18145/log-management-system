const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
{
    message: {
    type: String,
    required: true,
    },
    level: {
    type: String,
    enum: ["info", "warning", "error"],
    default: "info",
    },
    service: {
    type: String,
    required: true,
    },
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    },
},
{ timestamps: true }
);

module.exports = mongoose.model("Log", logSchema);
