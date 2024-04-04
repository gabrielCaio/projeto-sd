const { DataTypes } = require("sequelize")
const sequelize = require("../services/database")
const User = require('../models/user')

function getBoletoExpDate(days) {
    const date = new Date()
    date.setDate(date.getDate() + days)
    return date
}

const Boleto = sequelize.define("Boleto", {
    code: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    fintechId: {
        type: DataTypes.STRING,
        defaultValue: false
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    expirationDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: getBoletoExpDate(3)
    },
    isPaid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})

Boleto.belongsTo(User, { foreignKey: 'userId' })

module.exports = Boleto