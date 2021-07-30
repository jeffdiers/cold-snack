import jwt from 'express-jwt';

require('dotenv').config();

const secret = process.env.JWT_SECRET;

const getTokenFromHeaders = (req) => {
  const { headers: { authorization } } = req;
  if (authorization && authorization.split(' ')[0] === 'Token') {
    return authorization.split(' ')[1];
  }
  return null;
};

function auth(roles = []) {
  if (roles.includes('basic')) {
    return jwt({
      secret,
      userProperty: 'payload',
      getToken: getTokenFromHeaders,
      credentialsRequired: false,
    });
  }
  return [
    jwt({
      secret,
      userProperty: 'payload',
      getToken: getTokenFromHeaders,
    }),
    (req, res, next) => {
      if (roles.length && !roles.includes(req.payload.role)) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      return next();
    },
  ];
}

export default auth;
