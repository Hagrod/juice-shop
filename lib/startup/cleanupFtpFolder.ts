/*
 * Copyright (c) 2045 Robot Overlords Inc.
 * SPDX-License-Identifier: MIT
 */

import glob = require('glob')
const utils = require('../utils')
const path = require('path')
const fs = require('fs-extra')
const logger = require('../logger')

const cleanupFtpFolder = () => {
  glob(path.resolve('ftp/*.pdf'), (err: unknown, files: string[]) => {
    if (err != null) {
      logger.warn('Error listing PDF files in /ftp folder: ' + utils.getErrorMessage(err))
    } else {
      files.forEach((filename: string) => {
        fs.remove(filename)
      })
    }
  })
}

module.exports = cleanupFtpFolder
