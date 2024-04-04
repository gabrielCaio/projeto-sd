const { DataTypes } = require("sequelize")
const sequelize = require("../services/database")
const User = require('../models/user')

const Card = sequelize.define("Card", {
    cardId: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: {
                args: [16, 16],
                msg: "Invalid card number"
            }
        }
    },
    type: {
        type: DataTypes.ENUM,
        values: ["CREDIT", "DEBIT"],
        allowNull: false,
        defaultValue: "DEBIT"
    },
    cvv: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [3, 4],
                msg: "Invalid CVV"
            }
        }
    },
    expirationDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

Card.belongsTo(User, { foreignKey: 'userId' })

module.exports = Card