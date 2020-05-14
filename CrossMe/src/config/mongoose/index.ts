import mongoose from 'mongoose'

try {
  /*mongoose.connect('mongodb+srv://dbAdmin:OSTT2Ic7F4BmJb8f@crossme-gxvvo.gcp.mongodb.net/CrossMe',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })*/
  mongoose.connect('mongodb://localhost:27017/Crossme',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  console.log("Connected to mongoDB")
} catch (err) {
  console.log(err)
}

export default mongoose