const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController.js');
const songController = require('../controllers/songController.js');
const verifyToken = require('../middleware/middleware.js');

router.get('/songs', songController.getSongs);
router.post('/songs', songController.insertSongs);
router.post('/playlist', verifyToken, playlistController.create);
router.put('/playlist', verifyToken, songController.add);
router.delete('/playlist', verifyToken,songController.remove);

module.exports = router;