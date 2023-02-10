const express = require('express');
const router = express.Router();
const {
  requirePassword,
  requireAdminPermissions,
  requireUsernameAndPassword,
} = require('./utils');

router.get('/', (req, res) => {
  res.send('Here are the users: daniel, admin, and guest');
});

router.post('/register', requireUsernameAndPassword, (req, res) => {
  res.send('User registered successfully');
});

router.delete(
  '/:userId',
  requirePassword,
  requireAdminPermissions,
  (req, res) => {
    const { userId } = req.params;
    res.send(`User ${userId} deleted successfully`);
  }
);

router.use((req, res, next) => {
  res.status(404).send('No page in the users routes matches your request');
});

module.exports = router;

// curl command to test the POST route:
// curl -X POST localhost:3000/users/register -H "Content-Type: application/json" -d '{"username": "daniel", "password": "1234"}'
// curl command to test the DELETE route:
// curl -X DELETE localhost:3000/users/1 -H "Content-Type: application/json"
// curl -X DELETE localhost:3000/users/1 -H "Content-Type: application/json" -d '{"password": "1234"}'
// curl -X DELETE localhost:3000/users/1 -H "Content-Type: application/json" -d '{"password": "admin"}'
