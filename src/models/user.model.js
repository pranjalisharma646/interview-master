const mongooes = require ("mongoose")

const userSchema = new mongooes.Schema({
    username:{
        type:String,
        unique:[true,"Username already exists"],
        required:[true,"Username is required"]
    },
    email:{
        type:String,
        unique:[true,"Account already exists with this email Address"],
        required:[true,"Email is required"]

    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }
})


const userModel = mongooes.model("Users",userSchema)

module.exports = userModel