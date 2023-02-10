const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('This is a middleware function');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Mount the router at the /users path:
app.use('/users', require('./api/usersRouter'));

app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
