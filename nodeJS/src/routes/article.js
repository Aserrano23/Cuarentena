import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.render('article', {
        title: "Articulo del curso de nodeJS",
        message: "Esta es la página del articulo del curso de nodeJS"
    })
    res.end()
})

export default router