import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
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
        default: "https://images.app.goo.gl/unzqzkCsK8iCj3v49"
    },
},{ timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;