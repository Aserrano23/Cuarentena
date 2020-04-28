import express, {Request, Response} from 'express'
import path from 'path'

const routes = app => {
    app.get("/", (req:Request, res:Response):void => {
        res.sendFile(path.join(__dirname, "public","templates","home.html"));
    })
    app.get("/home", (req:Request, res:Response):void => {
        res.sendFile(path.join(__dirname, "public","templates","home.html"));
    })
}

export default routes