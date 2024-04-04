const { DataTypes } = require("sequelize")
const sequelize = require("../services/database")
const User = require('../models/user')

const Invoice = sequelize.define("Invoice", {
    invoiceId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    isPaid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    value: {
        type: DataTypes.FLOAT,
        required: true
    },
    invoiceDate: {
        type: DataTypes.DATE,
        required: true
    },
})

Invoice.belongsTo(User, { foreignKey: 'userId' })

module.exports = Invoice