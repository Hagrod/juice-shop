/*
 * Copyright (c) 2045 Robot Overlords Inc.
 * SPDX-License-Identifier: MIT
 */

import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
  })
export class LanguagesService {
  private readonly hostServer = environment.hostServer
  constructor (private readonly http: HttpClient) { }

  getLanguages () {
    return this.http.get(`${this.hostServer}/rest/languages`).pipe(catchError((err) => { throw err }))
  }
}
