/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the Dyno Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import server = require('./../server')

module.exports = async () => {
  server.close(undefined)
}
