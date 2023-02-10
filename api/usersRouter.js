const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Here are the users: daniel, admin, and guest');
});

router.post('/register', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).send('Please provide a username and password');
  } else {
    res.send('User registered successfully');
  }
});

module.exports = router;

// curl command to test the POST route:
// curl -X POST localhost:3000/users/register -H "Content-Type: application/json" -d '{"username": "daniel", "password": "1234"}'
