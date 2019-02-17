
module.exports = (req, res, next) => { // eslint-disable-line consistent-return
  if (req.method === 'POST' && req.url === '/login') {
    const db = require('../db.json'); // eslint-disable-line global-require
    const { email, password } = req.body;

    const user = db.users.find(u => u.email === email && u.password === password);
    if (user) {
      return res.status(200).send({ data: user, error: null });
    }

    return res.status(200).send({
      data: null,
      error: 'Invalid user email or password',
    });
  }

  next();
};
