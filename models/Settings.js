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
        default: "2"
    },
    rate: {
        type: String,
        default: "1"
    },
    silentMode: {
        type: Boolean,
        default: false
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Settings', SettingsSchema);