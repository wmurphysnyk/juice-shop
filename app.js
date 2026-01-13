/*
 * Copyright (c) 2014-2021 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */

require('./lib/startup/validateDependencies')().then(() => {
  const server = require('./server')
  server.start()
})
const express = require('express');
const app = express();

// 1. HARDCODED SECRET (High Severity)
// Snyk Code will flag this immediately as a security risk.
const AUTH_TOKEN = "api_key_88db832269a9246a39"; 

app.get('/search', (req, res) => {
  const searchTerm = req.query.q;

  // 2. REFLECTED XSS (High Severity)
  // Snyk flags this because 'searchTerm' comes from the user and is 
  // sent back to the browser without sanitization.
  res.send('<h1>Results for: ' + searchTerm + '</h1>');
});
