// Create web server
// Create a new express app
const express = require('express');
const app = express();
// Create a new comments array
const comments = [];
// Add a new comment to the comments array
app.post('/comments', (req, res) => {
  const { id, comment } = req.body;
  comments.push({ id, comment });
  res.status(201).send();
});
// Get all comments
app.get('/comments', (req, res) => {
  res.status(200).json(comments);
});
// Listen on port 4001
app.listen(4001, () => {
  console.log('Comments service started on port 4001');
});
