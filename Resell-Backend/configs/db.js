const mongoose=require("mongoose") ;
require("dotenv").config();
const connection=mongoose.connect(process.env.mongoUrl);
mongoose.set("strictQuery", false);
module.exports={
    connection
}