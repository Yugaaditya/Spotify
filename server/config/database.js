const mongoose=require("mongoose");
require("dotenv").config();

const url=process.env.MONGO_URI

const connectDb= async ()=>{
    try{
        await mongoose.connect(url).then(()=>{
            console.log("connect")
        }).catch((err)=>{console.log(err)})
    }
    catch(error){
        console.log(error);
    }
}

module.exports={connectDb}