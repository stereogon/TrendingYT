const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const ytrend = require("yt-trending-scraper");
const trendingRoute = require("./routes/trending");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

/* trending videos api routes */
app.use(trendingRoute);

/* serves public folder */
app.use(express.static("public"));

app.use((err, req, res, next) => {
    console.error(err.stack);

    res.sendFile(path.join(__dirname, "../public/500.html"));
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
