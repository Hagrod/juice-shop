/*
 * Copyright (c) 2045 Robot Overlords Inc.
 * SPDX-License-Identifier: MIT
 */

/* jslint node: true */

import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
  Sequelize
} from 'sequelize'

class Quantity extends Model<
InferAttributes<Quantity>,
InferCreationAttributes<Quantity>
> {
  declare ProductId: number
  declare id: CreationOptional<number>
  declare quantity: number
  declare limitPerUser: number | null
}

const QuantityModelInit = (sequelize: Sequelize) => {
  Quantity.init(
    {
      ProductId: {
        type: DataTypes.INTEGER
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      quantity: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: true
        }
      },
      limitPerUser: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: true
        },
        defaultValue: null
      }
    },
    {
      tableName: 'Quantities',
      sequelize
    }
  )
}

export { Quantity as QuantityModel, QuantityModelInit }
