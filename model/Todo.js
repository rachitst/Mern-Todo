import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    text:{
        type: String,
        required : true
    },
    content:{
        type: String,
        required : true
    },
    done : {
        type : Boolean,
        default : false
    },
    createdAt:{
        type: Date,
        default:Date.now()
    }
})

const todo = mongoose.model('todo',TodoSchema)
export default todo;