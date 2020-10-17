const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    name: {
        type: String,
        default: "N/A"
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: String,
        default: "N/A"
    },
    imageUrl: {
        type: String,
        default: "N/A"
    },
    coverImageUrl: {
        type: String,
        default: "N/A"
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