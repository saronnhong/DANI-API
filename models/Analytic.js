const mongoose = require('mongoose');

const AnalyticSchema = mongoose.Schema({
    word: {
        type: Object,
        default: {}
    },
    sentence: {
        type: Object,
        default: {}
    },
    userId: {
    type: String,
    required: true
}
})

module.exports = mongoose.model('Analytics', AnalyticSchema);