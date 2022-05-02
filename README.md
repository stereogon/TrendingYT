# TrendingYT
A Web Application made using Node.js and Express.js with Mongodb as database which uses @freetube/yt-trending-scraper package to scrap youtube trending page and stores the data in a database, the data is then retrieved via an application programming interface.

There are three endpoints in the api, 
1. /trendingdb , takes a get request to retrieve the data present in the database and show on the website.

2. /trending , takes a post request, scraps the youtube trending page and stores the data in mongodb, if some video was already present in the database, it updates its information.

3. /trendingdb/:id , takes a get request, uses the id to search the video in the database and  opens the video embeded in the html and autoplays it (while muted)

Packages Used:
express, body-parser, mongoose, ejs, yt-trending-scraper

Dev dependencies:
nodemon


Previews:
![image](https://user-images.githubusercontent.com/64136587/166179861-7a0ca010-e10a-4521-8634-2561ebda8b3d.png)
![image](https://user-images.githubusercontent.com/64136587/166179914-7654b653-c7fa-42d8-8d4c-49c1846f6e6c.png)
