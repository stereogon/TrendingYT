const express = require("express");
const router = express.Router();
const VideoModel = require("../models/videos.models");
const ytrend = require("yt-trending-scraper");
require('dotenv').config();

const parameters = {
    geoLocation: "IN",
    parseCreatorOnRise: false,
    page: "default",
};

let flag = true;

/* scraps and saves the videos to the database */
router.post("/trending", (req, res) => {
    /* repopulates the entire database for the first time */
    if (flag == true) {
        VideoModel.deleteMany()
            .then(() => {
                console.log("Database Cleared");
                flag = false;
            })
            .catch((err) => res.status(500).json(err));
    }

    ytrend
        .scrape_trending_page(parameters)
        .then((data) => {
            data.forEach((video) => {
                let xmodel = {
                    videoId: video.videoId,
                    title: video.title,
                    author: video.author,
                    authorId: video.authorId,
                    authorUrl: video.authorUrl,
                    videoThumbnail: video.videoThumbnails[1].url,
                    description: video.description,
                    viewCount: video.viewCount,
                    published: video.published,
                    lengthSeconds: video.lengthSeconds,
                    timeText: video.timeText,
                };

                /* updates the database for the next all the times */

                /* check if the video already exist in the database */
                let result = false;
                VideoModel.find({
                    videoId: video.videoId,
                })
                    .then((doc) => {
                        if (doc.length) {
                            /* if the video does exist, update it */
                            let model = new VideoModel(xmodel);
                            VideoModel.findOneAndUpdate(
                                {
                                    videoId: video.videoId,
                                },
                                xmodel
                            ).catch((err) => {
                                res.status(500).json(err);
                            });
                        } else {
                            /* if the video does not exist, add it */
                            let model = new VideoModel(xmodel);

                            model.save().catch((err) => {
                                res.status(500).json(err);
                            });
                        }
                    })
                    .catch((err) => {
                        return res.status(500).json(err);
                    });
            });

            setTimeout(() => {
                res.redirect("/trendingdb");
            }, 6000)
        })
        .catch((err) => {
            return res.status(500).json(err);
        });
});

/* loads the videos from the database */
router.get("/trendingdb", (req, res) => {
    console.log("loading from the database...");
    console.log(process.env.MONGO_URL);

    VideoModel.find({})
        .then((videos) => {
            console.log("reached there");
            return res.render("../src/views/index.ejs", { data: videos });
        })
        .catch((err) => {
            return res.status(500).json(err);
        });
});

/* loads information of a single video from the database */
router.get("/trendingdb/:id", (req, res) => {
    VideoModel.findOne({
        videoId: req.params.id,
    })
        .then((doc) => {
            res.render("../src/views/videopage.ejs", { data: doc });
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = router;
