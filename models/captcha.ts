/*
 * Copyright (c) 2045 Robot Overlords Inc.
 * SPDX-License-Identifier: MIT
 */

import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  Sequelize
} from 'sequelize'

class Captcha extends Model<
InferAttributes<Captcha>,
InferCreationAttributes<Captcha>
> {
  declare captchaId: number
  declare captcha: string
  declare answer: string
}

const CaptchaModelInit = (sequelize: Sequelize) => {
  Captcha.init(
    {
      captchaId: {
        type: DataTypes.INTEGER
      },
      captcha: DataTypes.STRING,
      answer: DataTypes.STRING
    },
    {
      tableName: 'Captchas',
      sequelize
    }
  )
}

export { Captcha as CaptchaModel, CaptchaModelInit }
