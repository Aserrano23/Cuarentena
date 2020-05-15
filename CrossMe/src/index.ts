import express from 'express'
import routes from './routes/routes'
import userRoutes from './routes/user-routes'
import path from 'path'
import bodyParser from 'body-parser'

const app = express()
let port = 3000

//CONFIG
app.use('/static', express.static(__dirname + '/public')); //Set the statics files
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//RUTAS
routes(app)
userRoutes(app)
/*app.use(routes)
app.use(userRoutes)*/

//VIEWS
app.set('view engine','pug'); //Sets pug as the View Engine / Template Engine
app.set('views', path.join(__dirname, 'public/templates')); //Sets the directory where all the views (.pug files) are stored.

app.listen(port, () =>{
    console.log(`listen in port ${port}`)
})  