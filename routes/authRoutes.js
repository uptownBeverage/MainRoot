const passport = require('passport');

module.exports = app => {
  app.get('/api/landing', (req, res) => {
    res.send({
      hello: 'This is landing Page '
    });
  });

  app.get(
    '/auth/googleService',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/googleService/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/dashboard');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
  app.get('/api/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
};