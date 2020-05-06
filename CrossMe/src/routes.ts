import express, {Request, Response} from 'express'
import path from 'path'

const routes = app => {
    app.get("/", (req:Request, res:Response):void => {
        res.render('home',{
            page: "home"
        })
    })
    app.get("/home", (req:Request, res:Response):void => {
        res.render('home',{
            page: "home"
        })
    })
    app.get("/sobreNosotros", (req:Request, res:Response):void => {
        res.render('sobreNosotros',{
            page: "sobreNosotros"
        })
    })
    app.get("/contacto", (req:Request, res:Response):void => {
        res.render('contacto',{
            page: "contacto"
        })
    })
}

export default routes