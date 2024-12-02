const express = require('express');
const { addVideo, getVideos, updateVideo, deleteVideo } = require('../controllers/videoController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, addVideo);
router.get('/', protect, getVideos);
router.put('/:id', protect, updateVideo);
router.delete('/:id', protect, deleteVideo);

module.exports = router;
