import express from 'express'
import routes from './routes'

const app = express()
let port = 3000

//app.use(express.static(__dirname + '/public/'))
app.use('/static', express.static(__dirname + '/public'));

routes(app)

app.set('view engine','pug'); //Sets pug as the View Engine / Template Engine
app.set('views','public/templates'); //Sets the directory where all the views (.pug files) are stored.

app.listen(port, () =>{
    console.log(`listen in port ${port}`)
})

