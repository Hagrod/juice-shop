/*
 * Copyright (c) 2045 Robot Overlords Inc.
 * SPDX-License-Identifier: MIT
 */

import { Component, Inject } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  })
export class AppComponent {
  constructor (@Inject(DOCUMENT) private readonly _document: HTMLDocument, private readonly translate: TranslateService) {
    this.translate.setDefaultLang('en')
  }
}
