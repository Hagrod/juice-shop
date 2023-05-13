/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the Dyno Shop contributors.
 * SPDX-License-Identifier: MIT
 */

require('./lib/startup/validateDependencies')().then(() => {
  const server = require('./server')
  server.start()
})
