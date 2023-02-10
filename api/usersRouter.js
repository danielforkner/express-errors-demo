const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Here are the users: daniel, admin, and guest');
});

router.post('/register', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(401).send({
      error: 'unauthorized',
      message: 'Please provide a username and password',
    });
  } else {
    res.send('User registered successfully');
  }
});

router.delete('/:userId', (req, res) => {
  const { userId } = req.params;
  const { password } = req.body;
  if (!password) {
    res
      .status(401)
      .send({ error: 'unauthorized', message: 'Please provide a password' });
  } else if (password !== 'admin') {
    res.status(403).send({
      error: 'forbidden',
      message: 'Invalid permissions for this action',
    });
  } else {
    res.send(`User ${userId} deleted successfully`);
  }
});

module.exports = router;

// curl command to test the POST route:
// curl -X POST localhost:3000/users/register -H "Content-Type: application/json" -d '{"username": "daniel", "password": "1234"}'
// curl command to test the DELETE route:
// curl -X DELETE localhost:3000/users/1 -H "Content-Type: application/json"
// curl -X DELETE localhost:3000/users/1 -H "Content-Type: application/json" -d '{"password": "1234"}'
// curl -X DELETE localhost:3000/users/1 -H "Content-Type: application/json" -d '{"password": "admin"}'
