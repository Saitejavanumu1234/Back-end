const mongoose=require("mongoose")

const contentScheema={
    name:String,
    passcode:String
}

const Content=mongoose.model("project")