import {Request, Response} from 'express'
import userModel from '../config/mongoose/models/userModel'
import bcrypt from 'bcrypt'

const User:any = userModel.User
let BCRYPT_SALT_ROUNDS:number = 12;

const userCtrl = {

    signup: (req:Request, res:Response, next) => {
        const errors:any[] = []
        const messages:any[] = []
        const {username, email, password, confirmPassword, role} = req.body

        if (password != confirmPassword) {
            errors.push({text: 'Las contraseñas no coinciden'})
        }
        if (password.length < 6) {
            errors.push({text: 'La contraseña no puede contener menos de 6 carácteres'})
        }
        if (errors.length > 0) {
            res.render('signup', {
                errors
            })
        } else {
            bcrypt.hash(password, BCRYPT_SALT_ROUNDS)
            .then((hashedPassword) => {
                let user = new User({
                    username: username,
                    email: email,
                    password: hashedPassword,
                    role:role
                })
                user.save()
            })
            res.redirect('home')
        }
        
    },
    login: (req:Request, res:Response, next) => {
        let username:String = req.body.username
        let password:String = req.body.password

        User.find(username)
            .then(function(user) {
                return bcrypt.compare(password, user.password);
            })
            .then(function(samePassword) {
                if(!samePassword) {
                    res.status(403).send();
                }
                res.send();
            })
            .catch(function(error){
                console.log("Error authenticating user: ");
                console.log(error);
                next();
            });

        res.render('home')
    }
}

export default userCtrl