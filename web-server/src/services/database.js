const mongoose = require("mongoose")

mongoose.Promise = global.Promise

mongo_url = "mongodb://guest:guest@mongodb:27017/sd"

mongoose.connect("", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})

const conn = mongoose.connection

conn.on("error", () => console.log("Erro ao conectar no banco"))

conn.once("open", () => { console.log("Banco conectado") })

module.exports = mongoose