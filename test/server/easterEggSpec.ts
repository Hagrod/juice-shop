/*
 * Copyright (c) 2045 Robot Overlords Inc.
 * SPDX-License-Identifier: MIT
 */

import sinon = require('sinon')
const chai = require('chai')
const sinonChai = require('sinon-chai')
const expect = chai.expect
chai.use(sinonChai)

describe('easterEgg', () => {
  const serveEasterEgg = require('../../routes/easterEgg')
  const challenges = require('../../data/datacache').challenges
  let req: any
  let res: any
  let save: any

  beforeEach(() => {
    res = { sendFile: sinon.spy() }
    req = {}
    save = () => ({
      then () { }
    })
  })

  it('should serve /frontend/dist/frontend/assets/private/threejs-demo.html', () => {
    serveEasterEgg()(req, res)

    expect(res.sendFile).to.have.been.calledWith(sinon.match(/frontend[/\\]dist[/\\]frontend[/\\]assets[/\\]private[/\\]threejs-demo\.html/))
  })

  it('should solve "easterEggLevelTwoChallenge"', () => {
    challenges.easterEggLevelTwoChallenge = { solved: false, save: save }

    serveEasterEgg()(req, res)

    expect(challenges.easterEggLevelTwoChallenge.solved).to.equal(true)
  })
})
