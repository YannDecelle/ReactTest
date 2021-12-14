import mongoose from "mongoose";

var Schema = mongoose.Schema

var user = new Schema({
    username: {
        type : String,
        required : true
    },
    password: {
        type: String,
        required: true
    },
    // walletid: {
    //     type: Schema.Types.ObjectId,
    //     required: false
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

mongoose.models = {}

var User = mongoose.model('User', user);

export default User