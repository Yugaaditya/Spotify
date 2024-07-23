const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    playlists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Playlist'
    }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
