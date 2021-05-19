# Movies/TV Shows browser app
- [Movies/TV Shows browser app](#https://github.com/DewEnforcer/movies-shows-browser-app)
    - [Dependencies](#dependencies)
    - [Installation and setup](#installation-and-setup)
    - [Changing the app behavior](#changing-the-app-behavior)
        - [App.js](#app.js)
        - [MovieList.jsx](#movielist.jsx)
        - [MoviePlayer.jsx](#movieplayer.jsx)
    - [Common errors and issues](#common-errors-and-issues)
        - [MoviePlayer.jsx](#movieplayer.jsx-issue)
## About
Web application made primarily using React.js. Users can browse, watch and/or explore different movies or TV shows.
## Prerequisites 
### Dependencies
* create-react-app
* axios
* formik
* react-router-dom
* react toastify
* shaka-player
### Installation and setup
* Clone the project
```
$ git clone https://github.com/DewEnforcer/movies-shows-browser-app
```
* Install all dependencies
```
$ npm i
```
* Start the application
```
npm start
```
## Changing the app behavior
This section talks about values that change behavior of certain components.

### App.js
* navItems - An array of navigation item objects, each object requires id, path (route name) and label.
```
const navItems = [
    {id: int, path: string, label: string}
]
```
### MovieList.jsx
* MAX_LIST_RESULTS - Value of items displayed by the list, it is recommended to use maximal value of 8.
```
const MAX_LIST_RESULTS = int;
```
* titleWithoutResults - Prop passed by a parent component, decides whether the title (if any is given) will be displayed even if no items are present in the data array. Will display title if set to true.
```
<MovieList titleWithoutResults={boolean}>
```
### MoviePlayer.jsx
* STREAM_URL - URL value of a primary video stream, will be loaded first.
```
const STREAM_URL = string;
```
* FALLBACK_STREAM_URL - URl value of a secondary/backup video stream, will be loaded on primary video stream loading failure.
```
const FALLBACK_STREAM_URL = string;
```
## Common errors and issues
This section talks about common errors/issues in certain components

### MoviePlayer.jsx issue
#### Failed to load primary source due to CORS error.
For at this time due to unknown issue, most likely because of improperly configured external server CORS settings, the primary stream loading will always fail on either local server/heroku deployment servers. No other environments have yet been tested.

Current solution: The video player uses mp4 source as a fallback (FALLBACK_STREAM_URL).

