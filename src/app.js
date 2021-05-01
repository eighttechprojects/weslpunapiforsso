const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieParser());

app.use(session({
  key: 'usid',
  secret: 'testsessionsstate',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 600000
  }
}));

app.use((req, res, next) => {
  if (req.cookies.usid && !req.session.user) {
      res.clearCookie('usid');        
  }
  next();
});


app.use('/', routes);

module.exports = app;