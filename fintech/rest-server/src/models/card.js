const { DataTypes } = require("sequelize")
const sequelize = require("../services/database")

const Card = sequelize.define("Card", {
    number: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
        validate: {
            len: {
                args: [16, 16],
                msg: "Invalid card number"
            }
        }
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
    creationDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    modificationDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
})

Card.hasOne(User, { foreignKey: 'cpf' })

module.exports = Card