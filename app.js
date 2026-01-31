const express = require('express');
const shopRoutes = require('./routes/shopRoutes');

const app = express();
const PORT = 4000;

// Use router
app.use('/', shopRoutes);

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:4000');
});
