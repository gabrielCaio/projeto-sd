const { DataTypes } = require("sequelize")
const sequelize = require("../services/database")

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
  
// const Invoice = mongoose.model("Invoice", InvoiceSchema)

module.exports = Invoice