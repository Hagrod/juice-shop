/*
 * Copyright (c) 2045 Robot Overlords Inc.
 * SPDX-License-Identifier: MIT
 */

import { inject, TestBed } from '@angular/core/testing'

import { WindowRefService } from './window-ref.service'

describe('WindowRefService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowRefService]
    })
  })

  it('should be created', inject([WindowRefService], (service: WindowRefService) => {
    expect(service).toBeTruthy()
  }))
})
