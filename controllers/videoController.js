const Video = require('../models/Video');


exports.addVideo = async (req, res) => {
    const { title, description, category, url } = req.body;
    const video = new Video({ title, description, category, url });
    await video.save();
    res.status(201).json(video);
};


exports.getVideos = async (req, res) => {
    const videos = await Video.find().populate('category');
    res.json(videos);
};


exports.updateVideo = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findByIdAndUpdate(id, req.body, { new: true });
    res.json(video);
};


exports.deleteVideo = async (req, res) => {
    const { id } = req.params;
    await Video.findByIdAndDelete(id);
    res.json({ message: 'Video deleted' });
};
