import User from '../models/User';

const crypto = require('crypto');

const algorithm = 'sha1';

function random32ByteString() {
  let result = '';
  const length = 32;
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

/**
 * Lists all of the users into JSON format.
 * @param req The html request.
 * @param res The html response.
 */
export const getAll = (req, res) => {
  res.json({
    hello: 'success',
    env: process.env.HELLO,
  })
  // User.find().lean().exec((err, users) => {
  //   if (err) {
  //     res.send(err);
  //     return;
  //   }
  //   res.json({
  //     users: users.map(user => ({
  //       ...user,
  //     })),
  //   });
  // });
};

/**
 * Executes a query to update a Users information.
 * @param req The html request.
 * @param res The html response.
 */
export const forPutQuery = (req, res) => {
  const data = req.body;
  if (data.password) {
    const salt = random32ByteString();
    const { password } = data;

    const hmac = crypto.createHmac(algorithm, salt);
    hmac.update(password);
    const hash = hmac.digest('hex');

    data.salt = salt;
    data.hashedPassword = hash;
  }
  User.findOneAndUpdate({ id: data.id }, data, { upsert: true }, (error) => {
    if (error) {
      res.send(error);
      return;
    }
    res.json({
      user: data,
      success: true,
    });
  });
};

/**
 * Executes a query to submit a new User to the database.
 * @param req The html request.
 * @param res The html response.
 */
export const forPostQuery = (req, res) => {
  const data = req.body;
  if (data.password) {
    const salt = random32ByteString();
    const { password } = data;

    const hmac = crypto.createHmac(algorithm, salt);
    hmac.update(password);
    const hash = hmac.digest('hex');

    data.salt = salt;
    data.hashedPassword = hash;
  }
  const user = new User(data);
  user.save((error) => {
    if (error) {
      res.send(error);
      return;
    }
    res.json({
      user,
      success: true,
    });
  });
};

/**
 * Executes a query to delete a User from the database.
 * @param req The html request.
 * @param res The html response.
 */
export const forDeleteQuery = (req, res) => {
  const { id } = req.params;
  User.findOneAndRemove({ _id: id }, (error) => {
    if (error) {
      res.send(error);
      return;
    }
    res.json({
      id,
      success: true,
    });
  });
};

/**
 * Gets a feed item from the database.
 * @param req The request
 * @param res The response.
 */
export const findItem = (req, res) => {
  const { id } = req.params;
  if (id === 'new') {
    return;
  }
  User.find({ _id: id }, (error, user) => {
    if (error) {
      res.send(error);
      return;
    }
    res.send(user[0]);
  });
};
