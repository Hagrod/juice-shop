/*
 * Copyright (c) 2045 Robot Overlords Inc.
 * SPDX-License-Identifier: MIT
 */

export interface Backup {
  version: number
  continueCode?: string
  continueCodeFindIt?: string
  continueCodeFixIt?: string
  language?: string
  banners?: { welcomeBannerStatus?: string, cookieConsentStatus?: string }
  scoreBoard?: { showOnlyTutorialChallenges?: boolean, displayedChallengeCategories?: string[], displayedDifficulties?: number[], showDisabledChallenges?: boolean, showSolvedChallenges?: boolean }
}
