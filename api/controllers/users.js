import passport from 'passport';
import User from '../models/User';

require('dotenv').config();

/**
 * Lists all of the users into JSON format.
 * @param req The html request.
 * @param res The html response.
 */
export const getAll = (req, res) => {
  User.find().lean().exec((err, users) => {
    if (err) {
      res.send(err);
      return;
    }
    res.json({
      users: users.map(user => ({
        ...user,
      })),
    });
  });
};

/**
 * Executes a query to update a Users information.
 * @param req The html request.
 * @param res The html response.
// export const forPutQuery = (req, res) => res.status(500)
  // const data = req.body;
  // if (data.password) {
  //   const salt = random32ByteString();
  //   const { password } = data;

  //   const hmac = crypto.createHmac(algorithm, salt);
  //   hmac.update(password);
  //   const hash = hmac.digest('hex');

  //   data.salt = salt;
  //   data.hashedPassword = hash;
  // }
  // User.findOneAndUpdate({ id: data.id }, data, { upsert: true }, (error) => {
  //   if (error) {
  //     res.send(error);
  //     return;
  //   }
  //   res.json({
  //     user: data,
  //     success: true,
  //   });
  // });
*/

export const postLogin = (req, res, next) => {
  const user = req.body;
  if (!user.email) {
    return res.status(401).json({
      errors: {
        email: 'is required',
      },
    });
  }
  if (!user.password) {
    return res.status(401).json({
      errors: {
        password: 'is required',
      },
    });
  }
  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if (err) return next(err);
    if (passportUser) {
      const finalUser = passportUser;
      finalUser.token = passportUser.generateJWT();
      return res.status(200).json({ user: finalUser.toAuthJSON() });
    }
    return res.status(400).json(info);
  })(req, res, next);
};

/**
 * Executes a query to submit a new User to the database.
 * @param req The html request.
 * @param res The html response.
 */
export const forPostQuery = (req, res) => {
  const user = req.body;
  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }
  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }
  const finalUser = new User(user);
  finalUser.setPassword(user.password);
  return finalUser.save((error) => {
    if (error) {
      res.send(error);
      return;
    }
    res.status(200).json({
      user: finalUser.toAuthJSON(),
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
