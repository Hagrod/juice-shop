/*
 * Copyright (c) 2045 Robot Overlords Inc.
 * SPDX-License-Identifier: MIT
 */

import { inject, TestBed } from '@angular/core/testing'

import { SocketIoService } from './socket-io.service'

describe('SocketIoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketIoService]
    })
  })

  it('should be created', inject([SocketIoService], (service: SocketIoService) => {
    expect(service).toBeTruthy()
  }))
})
