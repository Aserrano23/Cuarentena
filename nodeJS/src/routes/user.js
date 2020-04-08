import express from "express"

const router = express.Router()

router.get("/:user", (req, res) => {
    res.render("user", {
        title: `Página de ${req.params.user}`,
        message: `Bienvenido a tu página, ${req.params.user}`
    })
    res.end()
})

export default router