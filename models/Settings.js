const mongoose = require('mongoose');

const SettingsSchema = mongoose.Schema({
    cardSize: {
        type: String,
        default: "Medium"
    },
    voice: {
        type: String,
        default: "Fred"
    },
    pitch: {
        type: String,
        required: "2"
    },
    rate: {
        type: String,
        required: "1"
    },
    silentMode: {
        type: Boolean,
        required: false
    },
})

module.exports = mongoose.model('Settings', SettingsSchema);