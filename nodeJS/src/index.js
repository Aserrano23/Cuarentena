import express from "express"
import path from 'path'
import router from "./router"

const app = express()
var port = 3000

app.disable("x-powered-by")
app.set("env", "development")
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

app.use('/static', express.static(path.join(__dirname, "public")))

router(app)

app.use((req, res, next) => {
    res.render("404", {
        title: "Error",
        message: "La ruta a la que intentas acceder no existe"
    })
    next()
})
app.listen(port, () => {
    console.log(`Server listen in port ${port}`)
})