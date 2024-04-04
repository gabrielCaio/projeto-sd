const { Sequelize, DataTypes } = require("sequelize")
const sequelize = require("../services/database")

const User = sequelize.define("User", {
    userId: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: {
                args: [11, 11],
                msg: "Invalid CPF"
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    name: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    operationalPassword: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cardLimit: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    balance: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
})

module.exports = User