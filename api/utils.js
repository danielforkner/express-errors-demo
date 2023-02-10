const requireUsernameAndPassword = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(401).send({
      error: 'unauthorized',
      message: 'Please provide a username and password',
    });
  } else {
    next();
  }
};

const requirePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    res
      .status(401)
      .send({ error: 'unauthorized', message: 'Please provide a password' });
  } else {
    next();
  }
};

const requireAdminPermissions = (req, res, next) => {
  const { password } = req.body;
  if (password !== 'admin') {
    res.status(403).send({
      error: 'forbidden',
      message: 'Invalid permissions for this action',
    });
  } else {
    next();
  }
};

module.exports = {
  requirePassword,
  requireAdminPermissions,
  requireUsernameAndPassword,
};
