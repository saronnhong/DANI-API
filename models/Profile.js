const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    username: {
        type: String,
        default: "N/A"
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: String,
        default: "0"
    },
    imageUrl: {
        type: String,
        default: "https://pbs.twimg.com/media/D7W9_tDU0AAWauN.png"
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