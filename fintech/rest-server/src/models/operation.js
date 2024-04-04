const { DataTypes } = require("sequelize")
const sequelize = require("../services/database")
const User = require('../models/user')

const Operation = sequelize.define("Operation", {
    operationId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING,
        defaultValue: false
    },
    operation: {
        type: DataTypes.STRING,
        required: true
    },
})

Operation.belongsTo(User, { foreignKey: 'userId' })

module.exports = Operation