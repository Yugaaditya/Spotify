const User = require('../models/User');
const Playlist = require('../models/Playlist');
const Song = require('../models/Song');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const insertSongs= async(req,res)=>{
    const {songs}=req.body
        Song.insertMany(songs).then(function () {
            res.status(201).json(
                { message: "Success" }
            )
        console.log("Data inserted") // Success 
    }).catch(function (error) {
        console.log(error)     // Failure 
    }); 
}
const getSongs = async (req, res) => {
    try {
        const songs=await Song.find();
        res.json(songs);
    } catch (error) {
        console.error('Error in login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const add = async (req, res) => {
    try {
        const { id, songId } = req.body;
        await Playlist.findByIdAndUpdate(id,{ $push: { songs: songId } })
        res.status(201).json(
            { message: "Song added to playlist successfully!" }
        )
    } catch (error) {
        console.error('Error in login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const remove = async (req, res) => {
    try {
        const { id,songId } = req.body;
        const playlist = await Playlist.findById(id);
        playlist.songs = playlist.songs.filter(id => id.toString() !== songId);
        await playlist.save()
        res.status(201).json(
            { message: "Song removed from playlist successfully!" }
        )
    } catch (error) {
        console.error('Error in login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    insertSongs,
    getSongs,
    add,
    remove
};
