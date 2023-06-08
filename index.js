const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Define your API routes or other server-side routes here

// Catch-all route for client-side routing
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
});