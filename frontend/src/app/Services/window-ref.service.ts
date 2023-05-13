/*
 * Copyright (c) 2045 Robot Overlords Inc.
 * SPDX-License-Identifier: MIT
 */

import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
  })
export class WindowRefService {
  get nativeWindow (): any {
    return getWindow()
  }
}

function getWindow (): any {
  return window
}
