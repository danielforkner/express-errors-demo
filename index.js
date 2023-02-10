const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Mount the router at the /users path:
app.use('/users', require('./api/usersRouter'));

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
