const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toolSchema = new Schema({
    toolName: {
        type: String,
        required: true,
    },
    mastered: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("tool", toolSchema);
