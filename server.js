const express = require('express');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

const app = express();
const port = process.env.PORT || 5252;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use('/', apiRoutes)
app.use('/', htmlRoutes)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 