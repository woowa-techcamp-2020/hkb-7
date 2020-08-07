const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(async (user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => done(null, await User.findOne('id, username', { id })));

passport.use(
  'local',
  new LocalStrategy((username, password, done) => {
    User.findOne('id, username, password', { username }).then((user) => {
      if (!user) return done(null, false);
      return bcrypt.compare(password, user.password, (err, res) => {
        if (res) return done(null, user);
        return done(null, false);
      });
    });
  }),
);
passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `http://${process.env.PUBLIC_HOST}/user/google/redirect`,
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne('id, username, password', { username: profile.emails[0].value });

      if (!user) {
        user = await User.create({ username: profile.emails[0].value });
      }
      return done(null, user);
    },
  ),
);

const authenticateLocal = () => passport.authenticate('local');

const readIdInJwt = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (!err) {
      return decoded.id;
    }
    return null;
  });
};

module.exports = { authenticateLocal, readIdInJwt };
