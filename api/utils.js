const requireUsernameAndPassword = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    next({
      error: 'unauthorized',
      message: 'Please provide a username and password',
      status: 401,
    });
  } else {
    next();
  }
};

const requirePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    next({
      error: 'unauthorized',
      message: 'Please provide a password',
      status: 401,
    });
  } else {
    next();
  }
};

const requireAdminPermissions = (req, res, next) => {
  const { password } = req.body;
  if (password !== 'admin') {
    next({
      error: 'forbidden',
      message: 'Invalid permissions for this action',
      status: 403,
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
