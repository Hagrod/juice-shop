/*
 * Copyright (c) 2045 Robot Overlords Inc.
 * SPDX-License-Identifier: MIT
 */

import server = require('./../server')

// eslint-disable-next-line no-async-promise-executor,@typescript-eslint/no-misused-promises
export = async () => await new Promise<void>(async (resolve, reject) =>
  await server.start((err: Error) => {
    if (err) {
      reject(err)
    }
    resolve()
  })
)
