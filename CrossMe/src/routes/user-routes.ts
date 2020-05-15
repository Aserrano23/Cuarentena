import {Request, Response} from 'express'
import userCtrl from '../controllers/user.controller'
import userModel from '../config/mongoose/models/userModel'
const User = userModel.User

const routes = app => {
    app.get('/signup', (req:Request, res:Response) => {
        res.render('signup')
    })
    app.post('/signup', userCtrl.signup)
    app.get('/signin', (req:Request, res:Response) => {
        res.render('signin')
    })
}

export default routes