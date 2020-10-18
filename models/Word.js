const mongoose = require('mongoose');

const WordSchema = mongoose.Schema({
    id: {
        type: String,
        // required: true
    },
    categoryId: {
        type: String,
        // required: true
    },
    word: {
        type: String,
        // required: true
    },
    imageUrl: {
        type: String,
        // required: true
    },
    phonetic: {
        type: String,
        // required: true
    },
    ownerId: {
        type: String,
        // required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Words', WordSchema);