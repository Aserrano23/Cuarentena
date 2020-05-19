import mongoose from '../index'

const Schema = mongoose.Schema

const schemas = {
    userSchema: new Schema({
        username: {type: String, unique:true},
        email:{type: String, unique:true},
        password:{type: String},
        role:{
            type:String,
            enum:['coach','athlete']
        }
    })
}

export default schemas