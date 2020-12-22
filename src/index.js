const express = require("express");
const path = require("path");
const https = require('https');
const fs = require('fs');
const app = express();

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use(require('./routes/index'));

// Static Content
app.use(express.static(path.join(__dirname, 'public')))
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
// console.log('Server Listening...')
