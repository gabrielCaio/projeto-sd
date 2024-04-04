const { DataTypes } = require("sequelize")
const sequelize = require("../services/database")
const User = require('../models/user')

const Pix = sequelize.define("Pix", {
    key: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    }, 
    type: {
        type: DataTypes.ENUM,
        values: ["cpf", "email", "cel", "random"],
        allowNull: false
    },
    fintechId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

Pix.belongsTo(User, { foreignKey: 'userId' })

module.exports = Pix