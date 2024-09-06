import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required:[true, 'Email is required'],
        unique: [true, 'Already exist a email'],
        minlength:[10,'Email required minimun 10 characters']
    },
    password:{
        type: String,
        required:[true, 'Password is required']
    }
})

export default model('User',userSchema)