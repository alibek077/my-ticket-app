// app.js

// Import modules
const express = require('express');
const bodyParser = require('body-parser');  // Additional parser if needed.
const path = require('path');

// Import routes
const web_route = require('./routes/web');
const api_route = require('./routes/api');

// Set up a global reference to the mock database file 
global.mock_db = path.join(__dirname, './data/mock_db.json');

const app = express();

// Set view engine to use Pug templates
app.set('view engine', 'pug');

// Serve static files from the public folder
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount API and web routes
app.use('/api', api_route);
app.use('/', web_route);

// Fallback route: redirect unknown routes to the home page
app.use((req, res) => {
  res.redirect('/');
});

// Start server on port 3000
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
