const express=require("express")
const app=express()
const products=require("./products")
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")
const Content=require("./schema")
console.log(Content)


console.log(Content)
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://saitejavanumu0:<saitejavanumu0>@cluster0.tmxljst.mongodb.net/?retryWrites=true&w=majority")
.this(())


app.get("/",(req,res)=>{
    res.send("server started successfully")
})

app.get("/products",(req,res)=>{
    res.send(products)
})

app.get("/name",(req,res)=>{
    res.send("pilla bacha")
})

app.listen(4000,()=>console.log("server is started"))