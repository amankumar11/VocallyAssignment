import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb+srv://aman:test1234@nodetuts.98mkn.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/service", (req, res)=> {
    const { name, email} = req.body
    User.findOne({email: email}, (err) => {
        const user = new User({
            name,
            email
        })
        user.save(err => {
            if(err) {
                res.send(err)
            } else {
                res.send( { message: "Successfull" })
            }
        })
    })
    
}) 


app.listen(9002,() => {
    console.log("Backend started at port 9002")
})