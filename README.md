# Readme 

## Assumptions
* I decided to include a search box to filter by title and body, as well as by author. As the API https://jsonplaceholder.typicode.com/ for filtering by title needs to receive the full title to return a post, I have done the filtering through JS filtering, as the existent posts were already requested.

* I decided to delegate every petition to backend related to https://jsonplaceholder.typicode.com/ and kept the one to generate an image for user avatar (Ex: top image on right column http://localhost:3000/post/1) on frontend on purpose to prove the connection from the frontend to external APIs, apart from the backend itself.

## Deploy the application

Deploy Node.js + Express.js

0.  Open terminal on root of project './posts'
1.  cd server-nodejs
2.  npm install
3.  npm start 

Deploy React app

0.  Open terminal on root of project './posts'
1.  cd posts-project
2.  npm install
3.  npm start 