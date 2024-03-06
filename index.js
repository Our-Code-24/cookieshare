const app = require("express")()
const io = require("vercelsocket")(app)
const { v4: uuidv4 } = require('uuid');


app.use(require("express").static(__dirname + "/public"))

io.bindto("connect", (data) => {
    console.log("New client has logged on")
    io.send("test", "Test was triggered")
})

io.bindto("disconnect", () => {
    console.log("A user disconnected")
})

app.listen(3000)