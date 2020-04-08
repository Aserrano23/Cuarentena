const express = require("express")
const app = express()
var port = 3000

app.disable("x-powered-by")
app.set("env", "development")

app.get("/", function(req, res) {
    res.end("Hello World!!")
})

app.listen(port, function() {
    console.log(`Server listen in port ${port}`)
})