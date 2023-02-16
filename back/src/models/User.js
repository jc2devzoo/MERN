import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";


const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
},
    email: {
        type: String,
        required: true,
        unique: true,
},
    password: {
        type: String,
        required: true,
},
    avatar: {
        type: String,
        required: true,
}
})

UserSchema.pre("save", function(next){
    this.password = bcrypt.hash(this.password, 10)
    next();
})

const User = model("User", UserSchema);

export default User;