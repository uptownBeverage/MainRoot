const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
// const logger = require('./logger');
require('./models/User');
require('./services/Passport');

const keys = require('./config/keys');
const app = express();
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI);

if (process.env.NODE_ENV === 'production') {
  console.log('__dirname', __dirname);
  // app.use(express.static(path.join(__dirname, 'client/build')));
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// const prettyHost = PORT || 'localhost';

// app.listen(PORT, 'localhost', async (err) => {
//   if (err) {
//     return logger.error(err.message);
//   }
//   logger.appStarted(PORT, prettyHost)
// })
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started at ${port}`));
