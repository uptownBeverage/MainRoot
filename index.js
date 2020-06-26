const express = require("express");
const bodyParser = require("body-parser");
const logger = require('./logger');
const user = require("./routes/user");
const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// Middleware
app.use(bodyParser.json());

// PORT
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({ message: "API Working now" });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);


app.listen(PORT, (err) =>  {
  if(err){
    return logger.error(err);
  }
  logger.appStarted(PORT, 'localhost')
});