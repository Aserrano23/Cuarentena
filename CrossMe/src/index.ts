import express from 'express'
import routes from './routes'

const app = express()
let port = 3000

//app.use(express.static(__dirname + '/public/'))
app.use('/static', express.static(__dirname + '/public'));

routes(app)

app.listen(port, () =>{
    console.log(`listen in port ${port}`)
})

