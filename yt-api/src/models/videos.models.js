const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/trendingvideos");

const VideoSchema = new mongoose.Schema({
    videoId: String,
    title: String,
    author: String,
    authorId: String,
    authorUrl: String,
    videoThumbnail: String,
    description: String,
    viewCount: Number,
    published: Number,
    lengthSeconds: Number,
    timeText: String,
});

const model = mongoose.model("VideoModel", VideoSchema);
module.exports = model;
