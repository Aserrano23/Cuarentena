import express from 'express'
import routes from './routes'
import path from 'path'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
let port = 3000

app.use('/static', express.static(__dirname + '/public')); //Set the statics files
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

routes(app)

app.set('view engine','pug'); //Sets pug as the View Engine / Template Engine
app.set('views', path.join(__dirname, 'public/templates')); //Sets the directory where all the views (.pug files) are stored.

/*mongoose.connect('mongodb://localhost:27017/Crossme', (err:Error, res:Response) => {
    if (err) {
        throw err
    } else {
        console.log('Conectado a MongoDB')
            
    }
})*/
app.listen(port, () =>{
    console.log(`listen in port ${port}`)
})  