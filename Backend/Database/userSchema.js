import mongoose from "mongoose";
var UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required"],
        lowercase:true,
        trim:true
    },
    age:{
        type:String,
        required : [true,"Age is Required"]
    },
    mobile:{
        type: String,
        required:[true,"Mobile is Required"],
        maxlength:10,
        minlength:10,
        unique:true,
        trim: true,
    },
    email:{
        type : String,
        required: [true,"Email is Required"],
        unique: true,
        lowercase: true,
        trim: true,
    },
})

const User = mongoose.model('user_collection',UserSchema);
export default User;