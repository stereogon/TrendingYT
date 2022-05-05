const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}).then(() => {
    console.log("Connected to Mongodb Atlas");
}).catch((err) => {
    console.log("something wrong happened");
    console.log(err);
});

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
