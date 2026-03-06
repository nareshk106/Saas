import mongoose from "mongoose"
const{Schema}= mongoose

const userCrudSchema = new Schema({
    title:{
        type:String,
    },
    content:{
        type:String,
    }

})

const userCrude= new mongoose.model('userCrude',userCrudSchema)
export default userCrude