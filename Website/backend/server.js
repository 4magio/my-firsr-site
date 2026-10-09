const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve the frontend from the sibling folder.
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Receives the text typed by the user and replies with a message.
app.post('/api/message', (req, res) => {
  const { text } = req.body || {};
  if (typeof text !== 'string' || text.trim() === '') {
    return res.status(400).json({ error: 'Please provide some text.' });
  }
  res.json({ reply: `Server received: "${text.trim()}"` });
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Website running at http://localhost:${PORT}`));
}

module.exports = app;
