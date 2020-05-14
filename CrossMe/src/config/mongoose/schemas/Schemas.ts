import mongoose from '../index'

const Schema = mongoose.Schema

const schemas = {
    userSchema: new Schema({
        username: {type: String},
        email:{type: String},
        password:{type: String},
        role:{
            type:String,
            enum:['coach','athlete']
        }
    })
}

export default schemas