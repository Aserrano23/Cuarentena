import {Request, Response} from 'express'
import userModel from '../config/mongoose/models/userModel'
import bcrypt from 'bcrypt'

const User:any = userModel.User
let BCRYPT_SALT_ROUNDS:number = 12;

const userCtrl = {

    signup: async (req:Request, res:Response, next) => {
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
                errors,
                username,
                email
            })
        } else {
            /*bcrypt.hash(password, BCRYPT_SALT_ROUNDS)
            .then((hashedPassword) => {
                const newUser = new User({username, email, hashedPassword, role})
                await newUser.save()
            })*/
            const emailUser = await User.findOne({email: email})
            const usernameUser = await User.findOne({username: username})

            if (emailUser) {
                errors.push({text: 'El email ya está en uso'})
                res.render('signup', {
                    errors
                })
            } else {
                if (usernameUser) {
                    errors.push({text: 'El nombre de usuario ya existe'})
                    res.render('signup', {
                        errors
                    })
                } else {
                    const newUser = new User({username, email, password, role})
                    await newUser.save()
                    res.redirect('login')
                }
            }
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