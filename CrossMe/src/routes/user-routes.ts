import {Request, Response} from 'express'
import userCtrl from '../controllers/user.controller'
import userModel from '../config/mongoose/models/userModel'
const User = userModel.User

const routes = app => {
    app.get('/signup', (req:Request, res:Response) => {
        res.render('signup')
    })
    app.post('/signup', userCtrl.signup)
    app.get('/login', (req:Request, res:Response) => {
        res.render('login')
    })
    app.get('/login', userCtrl.login)
}

export default routes