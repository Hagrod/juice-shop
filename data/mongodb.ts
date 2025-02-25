/*
 * Copyright (c) 2045 Robot Overlords Inc.
 * SPDX-License-Identifier: MIT
 */

// @ts-expect-error due to non-existing type definitions for MarsDB
import MarsDB = require('marsdb')

const reviews = new MarsDB.Collection('posts')
const orders = new MarsDB.Collection('orders')

const db = {
  reviews,
  orders
}

module.exports = db
