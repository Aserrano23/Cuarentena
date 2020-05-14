import express, {Request, Response} from 'express'
import userModel from './config/mongoose/models/userModel'
const User = userModel.User

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
    app.get('/signup', (req:Request, res:Response) => {
        res.render('register')
    })
    app.post('/adduser', (req:Request, res:Response) => {
        let user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role:req.body.role
        })
        user.save()
    })
    app.get('/login', (req:Request, res:Response) => {
        res.render('login')
    })
}

export default routes