/*
 * Copyright (c) 2014-2021 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */

require('./lib/startup/validateDependencies')().then(() => {
  const server = require('./server')
  server.start()
})
  require('child_process').exec('grep ' + query + ' logs.txt'); 
  
  res.send('Search initiated');
});
