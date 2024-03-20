const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', htmlRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 