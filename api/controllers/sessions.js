import passport from 'passport';

export const login = (req, res, next) => {
  const user = req.body;
  if (!user.email) {
    return res.status(401).json({
      errors: 'email is required',
    });
  }
  if (!user.password) {
    return res.status(401).json({
      errors: 'password is required',
    });
  }
  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if (err) return next(err);
    if (passportUser) {
      const finalUser = passportUser;
      finalUser.token = passportUser.generateJWT();
      return res.status(200)
        .set('Authorization', `Token ${finalUser.token}`)
        .json({ success: true, user: finalUser.toAuthJSON() });
    }
    return res.status(400).json(info);
  })(req, res, next);
};

export const logout = (req, res) => {
  res.json({
    isLoggedIn: false,
  });
};
