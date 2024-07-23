const User = require('../models/User');
const Playlist = require('../models/Playlist');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const create = async (req, res) => {
    try {
        const { name } = req.body;
        const userId = req.userId       ;
        let newPlaylist = new Playlist({
            name: name,
            user: userId
        });
        let savedPlaylist = await newPlaylist.save()
        await User.findByIdAndUpdate(userId, { $push: { playlist: savedPlaylist._id } })
        res.status(201).json(
            { message: "Playlist Created Successfully!" }
        )
    } catch (error) {
        console.error('Error in login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    create,
};
