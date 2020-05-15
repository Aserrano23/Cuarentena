import {Request, Response} from 'express'
import userModel from '../config/mongoose/models/userModel'
const User = userModel.User

const userCtrl = {

    signup: (req:Request, res:Response) => {
        let user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role:req.body.role
        })
        user.save()
        res.render('home')
    }
}

export default userCtrl