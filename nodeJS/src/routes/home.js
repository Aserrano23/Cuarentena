import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.render('home', {
        title: "Curso de nodeJS",
        message: "mi segundo renderizado de plantillas, esta vez von variables"
    })
    res.end()
})

export default router