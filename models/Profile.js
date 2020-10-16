const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    coverImageUrl: {
        type: String,
        required: true
    },
    userId: {
    type: String,
    required: true
},
    date: {
    type: Date,
    default: Date.now
}
})

module.exports = mongoose.model('Profiles', ProfileSchema);