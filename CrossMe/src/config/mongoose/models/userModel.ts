import mongoose from '../index'
import Schemas from '../schemas/Schemas'

const models = {
    User: mongoose.model('user', Schemas.userSchema)
}

export default models