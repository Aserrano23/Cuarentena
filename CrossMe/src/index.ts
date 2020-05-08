import express from 'express'
import routes from './routes'
import path from 'path'
import cookieParser from 'cookie-parser'

const app = express()
let port = 3000

app.use(cookieParser)
app.use('/static', express.static(__dirname + '/public'));

routes(app)

app.set('view engine','pug'); //Sets pug as the View Engine / Template Engine
app.set('views', path.join(__dirname, 'public/templates')); //Sets the directory where all the views (.pug files) are stored.

app.listen(port, () =>{
    console.log(`listen in port ${port}`)
})

