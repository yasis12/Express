// Require express - gives us a function of express
const express = require('express');

// Create an instance of eexpress by calling thge gunction retuned above - gives us an object
const app = express();
const port = 5001    

// express static file serving - public is the folder name
app.use(express.static('server/public'));

// starts up our server
app.listen(port, () => {
    console.log('Listening on port', port);
})