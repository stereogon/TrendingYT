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
![image](https://user-images.githubusercontent.com/64136587/167039862-d44d1847-1959-49b9-8bb6-83fe74a80191.png)
![image](https://user-images.githubusercontent.com/64136587/167039949-1d2d2314-9ab8-4a95-98e9-5454f124f411.png)
![image](https://user-images.githubusercontent.com/64136587/167040047-fbc0d386-f50c-4621-9eb6-c5442b23f7ed.png)
![image](https://user-images.githubusercontent.com/64136587/167040190-31d00c9c-c202-43fc-a785-03b19f21b76e.png)
![image](https://user-images.githubusercontent.com/64136587/167040222-67c283fb-a59b-4f4b-b394-6db9e01cdd8a.png)
